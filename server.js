require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Apne banaye hue routes import karein
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Security aur Data Parse karne ke liye Middlewares
app.use(cors()); 
app.use(express.json()); // Taaki server JSON data samajh sake

// Routes ko API path ke sath link karein
app.use('/api/ai', aiRoutes);

// Server check karne ke liye ek basic route
app.get('/', (req, res) => {
    res.send("Backend is up and running!");
});

// Server ko start karna
app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
});
