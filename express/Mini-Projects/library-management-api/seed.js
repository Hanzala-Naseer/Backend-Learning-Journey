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
const Author=require("./models/Author.js");
const Publisher=require("./models/Publisher.js");
const User = require("./models/User");


const connectDB=require("./config/db.js");

async function saveBook() {
    try {
        await connectDB();

 

        // Step 2: Create Publisher
        // const publisher = await Publisher.create({
        //     name: "Karvaan",
        //     email: "c@gmail.com",
        //     countryCode: "pk",
        // });


               // Step 1: Create Author
        // const author = await Author.create({
        //     name: "Robert C. Martin",
        //     email: "unclebob@example.com",
        //     country: "USA",
        //     publisher:publisher._id
        // });

        // Step 3: Create Book
        const savedBook = await Book.create({
            title: "Advanced JS",
            author: "6a5dcf1ec23a82296019e6df",
            publisher: "6a5dcf1ec23a82296019e6de",
            price: 5001,
            category: "Programming",
            tags: ["IEEE"],
            reviews: [
                {
                    user: "Hanzala",
                    rating: 5,
                },
            ],
            isbn:Math.random()
        });

        // console.log("Author:", author);
        // console.log("Publisher:", publisher);
        console.log("Book:", savedBook);

    } catch (error) {
        console.log(error);
    }
}


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
        const books=await Book.find({category:"Programming"});


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



async function getOneBookPopulate(title){

    await connectDB("DB connected");

    const book= await Book.findOne({title:title}).populate("author");
    if(!book){
        console.log("Book not found !");
        return;
    }

    console.log(book);

}



async function getAllBookPopulate(){

    await connectDB("DB connected");

    const books= await Book.find({}).populate("author");
    if(!books){
        console.log("There are no books!");
        return;
    }

    console.log(books);

}


async function getBooksPopulateAuthorName(){

    await connectDB("DB connected");

    const book= await Book.find().populate("author","name email -_id");
    if(!book){
        console.log("Book not found !");
        return;
    }

    console.log(book);

}

async function getNestedPopulate() {
    await connectDB();

    const books = await Book.find().populate({
        path: "author",
        populate: {
            path: "publisher"
        }
    });

    console.log(JSON.stringify(books, null, 2));
}



// getNestedPopulate();
// getBooksPopulateAuthorName();
// getAllBookPopulate();
// deleteMany("Atomic Habits");


async function instanceMethod() {

    try {

        await connectDB();


   const book= await Book.findOne({_id:"6a5dd4459559a28fd3d89f21"});
   console.log(book.getSummary());

     

}
catch (error) {

    console.log(error.message);

}
    
}


async function testBookMethods(){

    try {

        await connectDB();

        const book = await Book.findById(
            "6a5dd4459559a28fd3d89f21"
        );


        if(!book){
            console.log("Book not found");
            return;
        }


        console.log("Title:", book.getTitle());

        console.log(
            "Expensive:",
            book.isExpensive()
        );


        console.log(
            "Before Discount:",
            book.price
        );


        book.applyDiscount(20);

        console.log(
            "After Discount:",
            book.price
        );


        console.log(
            "Info:",
            book.getBookInfo()
        );


        console.log(
            "Programming Book:",
            book.isProgrammingBook()
        );


    } catch(error){

        console.log(error.message);

    }

}




async function testUserMethod(){

    await connectDB();


    const user = await User.create({

        name:"Hanzala",
        email:"hanzala@gmail.com",
        role:"admin"

    });


    console.log(
        user.isAdmin()
    );


}


// testUserMethod();

async function testStaticMethods(){

    try{

        await connectDB();


        const programmingBooks =
            await Book.findByCategory(
                "Programming"
            );

        console.log(
            "Programming Books:",
            programmingBooks
        );



        const availableBooks =
            await Book.findAvailableBooks();

        console.log(
            "Available:",
            availableBooks
        );



        const cheapBooks =
            await Book.findBooksByPriceRange(
                500,
                2000
            );

        console.log(
            "Price Range:",
            cheapBooks
        );



        const count =
            await Book.countBooksByCategory(
                "Programming"
            );

        console.log(
            "Total Programming Books:",
            count
        );



        const search =
            await Book.searchBooks(
                "JS"
            );

        console.log(
            "Search Result:",
            search
        );


    }
    catch(error){

        console.log(error.message);

    }

}


testStaticMethods();


// getOneBookPopulate("Clean Code");
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