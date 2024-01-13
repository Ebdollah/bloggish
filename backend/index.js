// server.js
const express = require('express');
const cors = require('cors');
// server.js (continued)
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://ebdollah:mern-blog@blog.ojv5asz.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

