require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

// Initialize App
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json()); // Allow parsing JSON body
app.use(cors());         // Allow cross-origin requests

// Routes
app.use('/api/contact', contactRoutes);

// Base Route (Optional: just to check if API is running)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));