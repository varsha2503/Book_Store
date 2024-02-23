// Import required libraries
const express = require("express"); // Express framework for Node.js
const app = express(); // Create an instance of the Express application
const cors = require("cors"); // CORS middleware for handling cross-origin requests
const bookrouter = require("./routes/bookroutes"); // Import the router for book routes

// Import the database connection module
require("./connections/conn");

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Middleware for parsing JSON bodies
app.use("/api/v1", bookrouter); // Mount the book router under the "/api/v1" base path

// Start the server to listen on port 1000
app.listen(1000, () => {
    console.log("server started"); // Log a message to the console when the server starts
});
