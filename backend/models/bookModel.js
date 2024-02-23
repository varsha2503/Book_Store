// Import mongoose library
const mongoose = require("mongoose");

// Create a new Mongoose schema for a book
const bookscheme = new mongoose.Schema({
    // Define schema fields with their types and requirements
    name: { type: String, require: true },
    author: { type: String, require: true },
    isbn: { type: Number, require: true,
           unique: true,
           validate : { 
               validator: function (v) {
                  // Custom ISBN validation function for 12 digits
                  return /^\d{12}$/.test(v);
                },
               message: props => `${props.value} is not a valid ISBN number!`,
               },
          },
    des: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
});

// Create a Mongoose model based on the schema
module.exports = new mongoose.model("books",bookscheme) ;
