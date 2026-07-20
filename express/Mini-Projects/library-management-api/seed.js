//    METHOD 1 to Insert document
    //     const book=new Book({
//     title:1221,
//     author:12121212,
//     price:232323
// });


//    const savedBook= await book.save();



require("dotenv").config();

const mongoose=require("mongoose");

console.log("MONGO_URI:", process.env.MONGO_URI);

const Book=require("./models/Book.js");

const connectDB=require("./config/db.js");

async function saveBook(){

    try {

        
    await connectDB();


   const savedBook= await Book.create({

        title:"Clean Code",
        author:"    hahahahahha    ",
        price:1280,
        category:"       Novel               ",
        reviews:[{user:"Hanzala",rating:5}],
        publisher:{name:"Karvaan",email:"HANZALA@gMaIL.com        ",countryCode:"               pk"}
        

    });


    console.log("Book Saved:",savedBook);
        
    } catch (error) {

        console.log(error.message);

        // console.log(error.errors);

        // console.log(error.errors.title);

        // console.log(error.errors.title.message);


        
    }

};



async function getAllbooks() {
    try {

        await connectDB();

        console.log("DB connected...\n");

        const books=await Book.find();

        console.log(books);
        console.log(`Total Books: ${books.length}`);

        await mongoose.disconnect();
        
    } catch (error) {
        console.log(error.message);        
    }
    
}


async function getBooksFilter() {
    try {

        await connectDB();

        console.log("DB connected...\n");

        // const books=await Book.find({price:{$lt:500}});
        const books=await Book.find({price:{$gt:500}});


        console.log(books);

        await mongoose.disconnect();

        
    } catch (error) {
        console.log(error.message);        
    }
    
}


async function getOneBook(bookName) {
    try {

        await connectDB();

        console.log("DB Connected");


        const b1=await Book.findOne({title:bookName});
        console.log(b1);

        await mongoose.disconnect();
        
    } catch (error) {

        cosnole.log(error.message);
        
    }
    
}


async function getBookById(id) {
    try {

        await connectDB();
        console.log("DB connceted");

        const b= await Book.findById(id);

        console.log(b);
        
    } catch (error) {

        console.log(error.message);
        
    }
    
}


async function updateBookbyFindbyOne(id) {
try {

    await connectDB();
    console.log("DB connected");

    const b= await Book.findById(id);
    if(!b){
    console.log("Book not found");
    await mongoose.disconnect();
    return;
    }
    console.log("Original Book",b);

    b.price=6999;

   const updatedBook= await b.save();

    console.log("Book after updation: ",updatedBook);

    await mongoose.disconnect();
} catch (error) {

console.log(error.message);
    
}}
    


async function updateBookbyFindbyIdAndUpdate(id,price) {
try {

    await connectDB();
    console.log("DB connected");

    const updatedBook= await Book.findByIdAndUpdate(id,{price:price},{new:true});
    if(!updatedBook){
    console.log("Book not found");
    await mongoose.disconnect();
    return;
    }
    

    console.log("Book after updation: ",updatedBook);

    await mongoose.disconnect();
} catch (error) {

console.log(error.message);
    
}}
    


async function updateOne(id,price) {
try {

    await connectDB();
    console.log("DB connected");

    const res= await Book.updateOne({title:"Atomic Habits"},{$set:{price:price}});
    if(!res){
    console.log("Book not found");
    await mongoose.disconnect();
    return;
    }
    

    console.log(res);

    await mongoose.disconnect();
} catch (error) {

console.log(error.message);
    
}}



async function updateMany(value) {
try {

    await connectDB();
    console.log("DB connected");

    const res= await Book.updateMany({title:"Atomic Habits"},{$set:{price:value}});
    if(!res){
    console.log("Book not found");
    await mongoose.disconnect();
    return;
    }
    

    console.log(res);

    await mongoose.disconnect();
} catch (error) {

console.log(error.message);
    
}}


async function findByIdAndDelete(id){

    try {

        
    await connectDB();
    console.log("DB Connected");
    
    const deletedBook=await Book.findByIdAndDelete(id);

    if(!deletedBook){
        console.log("No such book exist!")
        await mongoose.disconnect();
        return;
    }

    console.log("Deleted Book: ",deletedBook);
    await mongoose.disconnect();

        
    } catch (error) {

        console.log(error.message);
        
    }


}


async function deleteOne(value){

    try {

        
    await connectDB();
    console.log("DB Connected");
    
    const deletedBook=await Book.deleteOne({title:value});

    if(!deletedBook){
        console.log("No such book exist!")
        await mongoose.disconnect();
        return;
    }

    console.log("Deleted Book: ",deletedBook);
    await mongoose.disconnect();

        
    } catch (error) {

        console.log(error.message);
        
    }


}



async function deleteMany(value){

    try {

        
    await connectDB();
    console.log("DB Connected");
    
    const deletedBook=await Book.deleteMany({title:value});

    if(!deletedBook){
        console.log("No such book exist!")
        await mongoose.disconnect();
        return;
    }

    console.log("Deleted Book: ",deletedBook);
    await mongoose.disconnect();

        
    } catch (error) {

        console.log(error.message);
        
    }


}



// deleteMany("Atomic Habits");
saveBook();

// deleteOne("Atomic Habits");



// findByIdAndDelete("6a58b2ebb14455f829502fd1")

// saveBook();

// updateMany(98721);

// updateOne("6a58b2ebb14455f829502fd1",987654321);

// updateBookbyFindbyIdAndUpdate("6a58b2ebb14455f829502fd1",0);

// updateBookbyFindbyOne("6a58b2ebb14455f829502fd1");

// getBookById("6a58b2ebb14455f829502fd1");


// getAllbooks();

// getBooksFilter();


// getOneBook("Atomic Habitsss");