import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import path from "path";
import cors from "cors";
import Replicate from "replicate";
import { OpenAI } from "openai";
dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const PORT = process.env.PORT || 5000;

const replicate = new Replicate({
    auth: process.env.REPLICATE_AUTH,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello to Vania's API");
});

app.post('/api/v1/chat', async (req, res) => {
    const { gptArray } = req.body;
    console.log(gptArray);
    try {
        const completion = await openai.chat.completions.create(
            {
                model: "gpt-4-vision-preview",
                messages: gptArray,
                max_tokens: 3000,
                temperature: 0.5,
            },
        );
        console.log(completion.choices[0].message);
        res.json(completion.choices[0].message);
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})