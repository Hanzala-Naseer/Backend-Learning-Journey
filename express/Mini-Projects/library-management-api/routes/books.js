const express= require("express");

const logger=require("../middleware/logger.js");

const isUserLoggedIn= require("../middleware/auth.js");

const router=express.Router();



function validateBook(req,res,next){

       if(!req.body){
        return res.status(400).json({message:"Body required"});
    }

    const {id,title,author}=req.body;
    if( !id || !title || !author){
       return res.status(400).json({message:"All fields required"});

    }
    next();

}
function checkDuplicateBook(req, res, next) {
    const { id } = req.body;

    const existingBook = books.find(book => book.id === id);

    if (existingBook) {
        return res.status(409).json({
            message: "Book ID already exists."
        });
    }

    next();
}

function createBook(req,res){
    const {id,title,author}=req.body;
    books.push({id,title,author});

    res.status(201).json({message:"Book added successfully.",book:req.body});

}


function findExistingBook(req,res,next){
    const id = Number(req.params.id); 
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    req.bookIndex = index;
    next();

}

function deleteBook(req,res){
    books.splice(req.bookIndex, 1);
    res.status(200).json({ message: "Book deleted successfully" });

}


const books=[];


router.get("/",(req,res)=>{
    res.send(books);
})

router.post(
    "/",
    logger,
    isUserLoggedIn,
    validateBook,
    checkDuplicateBook,
    createBook
);

router.delete(
    "/:id",
    logger,
    isUserLoggedIn,
    findExistingBook,
    deleteBook);

    module.exports=router;