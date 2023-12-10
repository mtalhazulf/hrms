import express from "express";
import { supabase } from "../../clients.js";
const router = express.Router();

router.use(express.json());

// Create new user
router.route("/signUp").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const { user, error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) {
            res.status(500).json({ error: error.message });  // Signup error
        } else {
            res.status(201).json({ message: 'User created successfully.', user }); // User signed up successfully
        }
    }
    catch (error) {
        // Other server-side error
        res.status(500).json({ error: error.message });
    }
});

// Login existing user
router.route("/login").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            res.status(401).json({ error: error.message });  // Login error
        } else {
            res.status(200).json(data); // User signed in successfully
        }
    }
    catch (error) {
        // Other server-side error
        res.status(500).json({ error: error.message });
    }
});


export default router;