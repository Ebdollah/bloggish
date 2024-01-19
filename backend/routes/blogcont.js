// backend/routes/users.js

const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog')
const { authenticateToken } = require('../authMiddleware'); // Import the middleware


router.post('/cblog', async (req, res) => {
  try {
    //Starting hashing the password
    // const { title, category, blog } = req.body;
    const newBlog = new Blog(req.body);

    // const newUser = new User(req.body);
    await newBlog.save();
    res.status(201).json({ message: 'Blog registered successfully' });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ message: 'Failed to register Blog', error: error.message });
  }
});// implemented Hashing the password

router.get('/getblog', async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
});

// Add more routes as needed (e.g., update user, delete user, etc.)

module.exports = router;
