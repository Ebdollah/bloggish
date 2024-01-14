// backend/routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    //Starting hashing the password
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
});// implemented Hashing the password

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
});

// backend/routes/users.js

// Route to login a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Compare the entered password with the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid password' });
        }
        // if (user.password !== password) {
        //     return res.status(401).json({ message: 'Invalid password' });
        // }
        // If the password is correct, generate a JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });


        res.status(200).json({ message: 'Login successful',token  });
    } catch (error) {
        res.status(500).json({ message: 'Failed to login', error: error.message });
    }
});

// Add more routes as needed (e.g., update user, delete user, etc.)

module.exports = router;
