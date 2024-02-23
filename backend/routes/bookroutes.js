// const router = require("express").Router() ;
// const bookModel = require("../models/bookModel");

// router.post("/add", async(req,res) => {
//     try {
//         const data = req.body ;
//         const newbook = new bookModel(data) ;
//         await  newbook.save().then(() => {
//             res.status(200).json({message:"Book Added Successfully"}) ;
//         }) ;  //database me store karne ke liye
//     } 
//     catch (error) {
//         console.log(error) ;
//     }
// });

// router.get("/books", async(req,res) => {
//     let books ;
//     try {
//         books = await bookModel.find() ;
//         res.status(200).json(books) ;
//     } 
//     catch (error) {
//         console.log(error) ;
//     }
// });

// router.get("/books/:id", async(req,res) => {
//     let book ;
//     const id = req.params.id ;
//     try {
//         book = await bookModel.findById(id) ;
//         res.status(200).json(book) ;
//     } 
//     catch (error) {
//         console.log(error) ;
//     }
// });

// router.put("/update/:id", async(req,res) => {
//     const id = req.params.id ;
//     const {name,author,isbn,des,price,image} = req.body ;
//     let book ;
//     try {
//         book = await bookModel.findByIdAndUpdate(id,{
//             name,
//             author,
//             isbn,
//             des,
//             price,
//             image,
//         }) ;
//         await book.save().then(() => res.json({message:"data updated"})) ;
//     } 
//     catch (error) {
//         console.log(error) ;
//     }
// });

// router.delete("/delete/:id", async(req,res) => {
//     const id = req.params.id ;
//     try {
//         await bookModel.findByIdAndDelete(id)
//         .then(() => res.status(201).json({message:"book deleted successfully"})) ;
//     } 
//     catch (error) {
//         console.log(error) ;
//     }
// });

// module.exports = router ;





// Import the Express router
const router = require("express").Router();
// Import the bookModel from the models directory
const bookModel = require("../models/bookModel");

// Endpoint to add a new book to the database
router.post("/add", async (req, res) => {
    try {
        const data = req.body; // Get the data from the request body
        const newbook = new bookModel(data); // Create a new book instance with the data
        await newbook.save().then(() => {
            res.status(200).json({ message: "Book Added Successfully" });
        }); // Save the new book to the database
    } catch (error) {
        console.log(error);
    }
});

// Endpoint to get all books from the database
router.get("/books", async (req, res) => {
    let books;
    try {
        books = await bookModel.find(); // Find all books in the database
        res.status(200).json(books); // Return the books as JSON
    } catch (error) {
        console.log(error);
    }
});

// Endpoint to get a specific book by its ID
router.get("/books/:id", async (req, res) => {
    let book;
    const id = req.params.id; // Get the book ID from the request parameters
    try {
        book = await bookModel.findById(id); // Find the book by its ID
        res.status(200).json(book); // Return the book as JSON
    } catch (error) {
        console.log(error);
    }
});

// Endpoint to update a book by its ID
router.put("/update/:id", async (req, res) => {
    const id = req.params.id; // Get the book ID from the request parameters
    const { name, author, isbn, des, price, image } = req.body; // Get updated data from the request body
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
            // Find the book by its ID and update its fields
            name,
            author,
            isbn,
            des,
            price,
            image,
        });
        await book.save().then(() => res.json({ message: "data updated" }));
    } catch (error) {
        console.log(error);
    }
});

// Endpoint to delete a book by its ID
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id; // Get the book ID from the request parameters
    try {
        await bookModel.findByIdAndDelete(id).then(() =>
            res.status(201).json({ message: "book deleted successfully" })
        ); // Find the book by its ID and delete it
    } catch (error) {
        console.log(error);
    }
});

// Export the router to use in other files
module.exports = router;
