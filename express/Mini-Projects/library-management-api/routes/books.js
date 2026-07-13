const express= require("express");

const logger=require("../middleware/logger.js");

const isUserLoggedIn= require("../middleware/auth.js");

const {books,getBooks,createBook,deleteBook}=require("../controllers/bookController.js");

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



function findExistingBook(req,res,next){
    const id = Number(req.params.id); 
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }
    req.bookIndex = index;
    next();

}





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
router.get("/error", (req, res, next) => {

    const error = new Error("Something failed!");

    next(error);

});
    module.exports=router;