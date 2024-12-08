const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;
        // Remove deprecated options
        await mongoose.connect(dbURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
