require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // This should point to the correct db.js location

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

connectDB(); // Call the connectDB function
    
app.listen(5000, () => {
  console.log('Server running on port 5000');
});