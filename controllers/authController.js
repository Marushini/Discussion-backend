// authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Dummy user data for demo purposes (replace with database query in real app)
const users = [
    {
        id: 1,
        email: 'Maru@123',
        password: '123', // In a real app, this would be a hashed password
    },
];

// Login function
const login = (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the password (In a real app, you'd hash and compare the password)
    if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h',
    });

    // Send response
    res.status(200).json({ message: 'Login successful', token });
};

module.exports = { login };