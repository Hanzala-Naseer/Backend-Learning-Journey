






const books=[];


function getBooks(req,res){

    res.status(200).json({message:"Books fetched successfully! ",books:books})



}

function createBook(req,res){
    const {id,title,author}=req.body;
    books.push({id,title,author});

    res.status(201).json({message:"Book added successfully.",book:req.body});

}


function deleteBook(req,res){
    books.splice(req.bookIndex, 1);
    res.status(200).json({ message: "Book deleted successfully" });

}


module.exports={
    books,
    getBooks,
    createBook,
    deleteBook
}




