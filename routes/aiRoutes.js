const express = require('express');
const router = express.Router();

router.post('/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        console.log(`Generating free image for prompt: ${prompt}`);

        // Free AI Image Generator (No API Key Required)
        // URL mein spaces aur special characters ko fix karne ke liye encodeURIComponent use kiya hai
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&nologo=true`;

        // Direct frontend ko image ka link bhej do
        res.json({ imageUrl: imageUrl });

    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ error: "Image generate karne mein problem aayi." });
    }
});

module.exports = router;
