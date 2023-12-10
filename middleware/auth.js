import { config } from "dotenv";
config();
import { supabase as supa, stripe } from '../clients.js';


async function auth(req, res, next) {
    // Validation checks for existance of jwt in headers and then add it to the body
    try {
        req.body.jwt = req.headers.authorization.split(' ')[1]

    }
    catch (err) {
        res.status(400).json({ "error_message": "No jwt given !" });
        return;
    }
    try {
        var jwt = req.body.jwt;
        if (!jwt) {
            res.status(400).json({ "error_message": "No jwt given !" });
            return;
        }
    }
    catch (err) {
        res.status(500).json({ "error_message": "Unable to get jwt - in ai.js", "error": err });
        return;
    }

    // Check if user is indeed authenticated - if not return error
    try {
        var { data } = await supa.auth.getUser(jwt)
        if (!data.user) {
            res.status(404).json({ "error_message": "Access Token is expired ! - Please login in again and/or send the latest token." });
            return;
        }
    }
    catch (err) {
        res.status(500).json({ "error_message": "Unable to connect to supabase for getting user", "error": err });
        return;
    }

    createCustomer(data.user)
    req.userData = data.user;
    next();
}
async function createCustomer(user, old = false) {
    const email = user.email
    const name = user.email.split("@")[0]
    // Search for customer using their email
    var searchCustomer = await stripe.customers.list({
        email: email,
    });


    // If not exits - Create new customer and return
    if (searchCustomer.data.length === 0) {
        if (old === true) {
            return null;
        }
        console.log("Creating New User")
        const customer = await stripe.customers.create({
            email: email,
            name: name,
        });

        // Add to supabase
        const { error } = await supa
            .from('UserPurchase')
            .insert({ uuid: user.id, cust_id: customer.id, wordcount: 1000, plan: '' })
        if (error) {
            console.log(error)
            return null;
        }


        return customer;
    }
    // If exists - return existing customer
    else {
        console.log("Customer Already exists")
        return searchCustomer.data[0];
    }



}


export default auth;  // Path: middleware\auth.js