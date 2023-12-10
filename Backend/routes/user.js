import express from "express";
import { supabase as supa } from "../../clients.js";
import auth from "../../middlewares/auth.js";
const router = express.Router();

// Initialize Middleware for this route
router.use(express.json());

router.route('/').get(async (req, res) => {
    res.send("For tracking user.")

});

router.use(auth)

router.route('/getHistory').get(async (req, res) => {
    let { data, error } = await supa  //Fetch data of user is  stored in userChatHistory
        .from('chatHistory')
        .select('*')  //chat is the column name
        .eq('uuid', req.userData.id)


    res.status(200).json(data)
});

router.route('/getHistory').delete(async (req, res) => {
    let { data, error } = await supa  //Fetch data of user is  stored in userChatHistory
        .from('chatHistory')
        .delete()
        .eq('uuid', req.userData.id)


    res.status(200).json(data)
});

// Return users current wordcount
router.route('/getWordCount').get(async (req, res) => {
    //console.log(req.userData.id)
    try {
        const { data, error } = await supa
            .from('UserPurchase')
            .select('wordcount')
            .eq("uuid", req.userData.id)
            .single();

        if (error) {
            console.log(error)
        }
        // console.log(data)

        res.json(data.wordcount)
    }
    catch (err) {
        res.status(500).json({ "error_message": "Error in wordcount", "error": err })
        return
    }

});

// decrement wordcount
// req word
router.route('/decrementWordCount').post(async (req, res) => {

    if (!req.body.word) {
        res.status(400).json({ "error_message": "No wordcount provided - please provide word: ?" })
        return
    }

    try {
        dec = parseInt(req.body.word)
    }
    catch (err) {
        res.status(400).json({ "error_message": "Invalid wordcount provided - please provide word: ?" })
        return
    }

    const { data, error } = await supa
        .from('UserPurchase')
        .select('wordcount')
        .eq("uuid", req.userData.id)
        .single();

    if (error) {
        console.log(error)
        res.status(500).json({ "error_message": "Error in getting wordcount for decrement", "error": err })
    }

    const { error2 } = await supa
        .from('UserPurchase')
        .update({
            wordcount: data.wordcount - dec,
        })
        .eq("uuid", req.userData.id)
    if (error2) {
        res.status(500).json({ "error_message": "Error in writing back to database", "error": err })
        console.log(error2)
    }

    res.status(200).json({ "message": "Wordcount decremented" })
});


export default router;