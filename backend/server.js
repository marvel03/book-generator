import express from "express"
import cors from "cors"
import OpenAI from "openai";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./backend/.env" });
// 
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.post("/generate-prompt", async function (req, res) {
    console.log("generate-prompt endpoint reached");
    let formData = req.body;
    const prompt = `
    Create a book cover image prompt
    Title: ${formData.title},
    Genre: ${formData.genre},
    Style: ${formData.style},
    Main Character: ${formData.mainCharacter},
    StoryIdea: ${formData.storyIdea},
    `
    const response = await client.chat.completions.create({
        model: "gpt-5-mini",

        messages: [
            {
                role: "system",
                content:
                    "You are an expert storybook prompt engineer.",
            },

            {
                role: "user",
                content: prompt,
            },
        ],
    });
    res.json({
        success: true,
        generatedPrompt:
            response.choices[0].message.content,
    });
}) 