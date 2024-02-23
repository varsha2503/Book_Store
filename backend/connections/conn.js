// Import mongoose library
const mongoose = require("mongoose");

// Connect to MongoDB using mongoose
mongoose.connect(
    "mongodb+srv://jiggupunnu:somework@mgdb.eqdm5nk.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
    console.log("connected to database");
});
