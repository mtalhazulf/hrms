import express from "express";
import { supabase, openAI as api } from "../../clients.js";
import auth from "../../middlewares/auth.js";
import axios from "axios";

const router = express.Router();

router.use(express.json());
router.use(auth);

router.route("/").post(async (req, res) => {
    let responseData = "";
    const prompt = req.body.prompt;
    var id = req.body.id;
    console.log(id)

    try {
        const { data, error1 } = await supabase
            .from('UserPurchase')
            .select('wordcount')
            .eq("uuid", req.userData.id)
            .single();

        if (error1) {
            console.log("Error fetching Wordcount:", error1);
            return;
        }
        if (data.wordcount < 0) {
            res.status(400).json({ "error_message": "Wordcount is less than 0" })
            return
        }
    }
    catch (err) {
        console.error("Error fetching Wordcount:", err);
    }

    var gptArray = [];

    ////////////////////////// Handles chat History ////////////////////////////
    ///////////////////////// Always makes gptArray to have latest history ///////////////////////////

    // Get the user chat history
    let { data, error } = await supabase  //Fetch data of user is  stored in userChatHistory
        .from('chatHistory')
        .select('chat')  //chat is the column name
        .eq('uuid', req.userData.id)
        .eq('id', req.body.id);

    if (error) {
        console.log("Error fetching user data:", error);

        res.status(500).send("Error fetching user data from chatHistory");
        return;
    }

    if (!data || data.length === 0) {
        const { data, error } = await supabase
            .from('chatHistory')
            .insert({
                chat: [{
                    "role": "system",
                    "content": "Your name is 'صديقي' you are funny and cosy assistant who love Saudi Arabia.\
                    You are a very helpful assistant who only replies in Arabic language no matter in what language the question is asked.\
                    You will greet the user's first message with 'السلام عليكم'"
                }],
                uuid: req.userData.id
            }).select()

        id = data[0].id;
        gptArray = [{
            "role": "system",
            "content": "Your name is 'صديقي' you are funny and cosy assistant who love Saudi Arabia.\
            You are a very helpful assistant who only replies in Arabic language no matter in what language the question is asked.\
            You will greet the user's first message with 'السلام عليكم'"
        }]

        if (error) {
            console.log("Error creating user data:", error);
            res.status(500).send("Error inserting chat to chatHistory");
            return;
        }
    }
    else {
        gptArray = data[0].chat;
    }

    gptArray.push({ "role": "user", "content": prompt });
    /////////////////////////////////////////////////////////////////////////////////////////






    ///////////////////////////// GET OPENAI RESPONSE /////////////////////////////
    const completion = await api.createChatCompletion(
        {
            model: "gpt-3.5-turbo",
            messages: gptArray,
            temperature: 0.9,
            stream: true,
        },
        { responseType: "stream" }
    );


    try {
        completion.data.on("data", (data) => {
            const lines = data
                ?.toString()
                ?.split("\n")
                .filter((line) => line.trim() !== "");
            for (const line of lines) {
                const message = line.replace(/^data: /, "");
                try {
                    const parsed = JSON.parse(message);
                    if (parsed.choices && parsed.choices.length > 0) {
                        const delta = parsed.choices[0].delta;
                        if (delta && delta.content) {
                            responseData += delta.content;
                            res.write(delta.content);
                            console.log(delta);
                        } else {
                            console.log("Content not found in the delta", parsed);
                        }
                        if (parsed.choices[0].finish_reason === 'stop') {
                            res.end();
                            console.log("Stream finished");
                            break;
                        }
                    } else {
                        console.log("Choices not found or empty in the response", parsed);
                    }
                } catch (error) {
                    console.error("Could not JSON parse stream message", message, error);
                }
            }
        });
    } catch (error) {
        console.error("Could not JSON parse stream message", error);
    }

    //////////////////////////////////////////////////////////////////////////////////////////
    completion.data.on('end', async () => {
        console.log('End of data.');
        res.status(200);

        gptArray.push({ "role": "assistant", "content": responseData });

        ////////////////////// Save the chat history ///////////////////////
        try {
            // Update supabase table 'users' with the updated history
            const { error } = await supabase
                .from('chatHistory')
                .update({ chat: gptArray })
                .eq('uuid', req.userData.id)
                .eq('id', id);

            if (error) {
                console.log("Error updating chat history:", error);
                return;
            }

        } catch (error) {
            console.error("Error updating chat history:", error);
        }
        ///////////////////////////////////////////////////////////
        //////////////////// UPDATE WORD COUNT ////////////////////
        const dec = responseData.split(" ").length;

        try {
            const { data, error1 } = await supabase
                .from('UserPurchase')
                .select('wordcount')
                .eq("uuid", req.userData.id)
                .single();

            if (error1) {
                console.log("Error fetching Wordcount:", error1);
                return;
            }

            const { error } = await supabase
                .from('UserPurchase')
                .update({
                    wordcount: data.wordcount - dec,
                })
                .eq("uuid", req.userData.id)


            if (error) {
                console.log("Error updating Wordcount:", error);
                return;
            }
        }
        catch (err) {
            console.error("Error updating Wordcount:", err);
        }



    });
});

export default router;