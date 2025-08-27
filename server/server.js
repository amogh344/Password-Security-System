// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/password', require('./routes/passwordRoutes'));

// Define the port
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected successfully ✅');
    // Start the server
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port: ${PORT}`);
    });
})
.catch((err) => {
    console.error('🔴 MongoDB connection error:', err);
    process.exit(1);
});

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the AI Password Security API!');
});