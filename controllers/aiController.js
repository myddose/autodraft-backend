const { OpenAI } = require('openai');

// OpenAI ka connection setup kar rahe hain
const openai = new OpenAI({
    apiKey: process.env.AI_API_KEY, 
});

const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required!" });
        }

        console.log(`Generating image for prompt: ${prompt}`);

        // OpenAI DALL-E API ko request bhej rahe hain
        const response = await openai.images.generate({
            model: "dall-e-3", // Aap dall-e-2 bhi use kar sakte hain fast/cheap results ke liye
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        // AI se jo image link aayega, usko nikal rahe hain
        const imageUrl = response.data[0].url;

        // Frontend ko real AI image bhej rahe hain
        res.status(200).json({
            success: true,
            message: "Image generated successfully!",
            imageUrl: imageUrl,
            prompt: prompt
        });

    } catch (error) {
        console.error("OpenAI API Error:", error.message || error);
        res.status(500).json({ error: "Image generate karne mein problem aayi." });
    }
};

module.exports = {
    generateImage
};
