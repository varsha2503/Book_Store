// Import mongoose library
const mongoose = require("mongoose");

// Create a new Mongoose schema for a book
const bookscheme = new mongoose.Schema({
    // Define schema fields with their types and requirements
    name: { type: String, require: true },
    author: { type: String, require: true },
    isbn: { type: Number, require: true },
    des: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
});

// Create a Mongoose model based on the schema
module.exports = new mongoose.model("books",bookscheme) ;