#Initialize a New Node.js Project
npm init -y

#Install Required Packages
npm install express mongoose body-parser cors bcryptjs jsonwebtoken

express: Web framework for Node.js.
mongoose: MongoDB object modeling tool.
body-parser: Middleware to parse incoming request bodies.
cors: Middleware to enable CORS (Cross-Origin Resource Sharing).
bcryptjs: Library to hash passwords.
jsonwebtoken: Library to generate and verify JSON Web Tokens for authentication.

#Set Up Express Server
const express = require('express');
//Importing the Express.js library to create a web server.

const cors = require('cors');
//Importing CORS middleware for handling cross-origin requests.

const app = express();
//Initializing an Express application instance.

app.use(cors());
app.use(express.json());
//Using CORS middleware for cross-origin requests and enabling JSON parsing for request bodies.

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});
//Defining a root route that sends a welcome message.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
//Setting the server port and starting the Express server.

#Go to https://cloud.mongodb.com/v2#/org/000000000000000000000000/projects 
>Click New Project
>Create New Project
>Create Deployment
>edit username and password
>create user
>finish and close
>go to connect and click drivers
>get your connection string




