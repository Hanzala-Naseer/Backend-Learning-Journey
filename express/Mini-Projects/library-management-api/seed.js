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
const BorrowRecord = require("./models/BorrowRecord");

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




// async function borrowBook(userId, bookId) {

//     const session = await mongoose.startSession();

//     try {

//         session.startTransaction();

//         console.log(`\nTransaction Started for User: ${userId}`);

//         const user = await User.findById(userId).session(session);

//         if (!user) {
//             throw new Error("User not found");
//         }

//         const book = await Book.findById(bookId).session(session);

//         if (!book) {
//             throw new Error("Book not found");
//         }

//         console.log(`📖 ${user.name} is checking availability...`);

//         if (!book.available) {
//             throw new Error("Book already borrowed");
//         }

//         await new Promise(resolve => setTimeout(resolve, 3000));

//         book.available = false;

//         await book.save({ session });

//      const dueDate = new Date();
//     dueDate.setDate(dueDate.getDate() + 14);

//     await BorrowRecord.create(
//             [{
//                 user: user._id,
//                 book: book._id,
//                 dueDate
//             }],
//             { session }
//         );

//         user.borrowedBooks += 1;

//         await user.save({ session });

//         console.log(`${user.name} is committing...`);

//         await session.commitTransaction();

//         console.log(`Transaction Committed for ${user.name}`);

//     }
//     catch (error) {

//         await session.abortTransaction();

//         console.log(`Transaction Failed for User ${userId}`);

//         console.log(error.message);

//     }
//     finally {

//         session.endSession();

//     }

// }


// async function testRaceCondition() {

//     try {

//         await connectDB();

//         console.log("\n===============================");
//         console.log(" RACE CONDITION TEST STARTED ");
//         console.log("===============================\n");

//         //-------------------------------------------------
//         // Create User 1
//         //-------------------------------------------------

//         const user1 = await User.create({

//             name: `User_A_${Date.now()}`,

//             email: `userA${Date.now()}@gmail.com`

//         });

//         //-------------------------------------------------
//         // Create User 2
//         //-------------------------------------------------

//         const user2 = await User.create({

//             name: `User_B_${Date.now()}`,

//             email: `userB${Date.now()}@gmail.com`

//         });

//         console.log("👤 User 1:", user1.name);

//         console.log("👤 User 2:", user2.name);

//         //-------------------------------------------------
//         // One Available Book
//         //-------------------------------------------------

//         const BOOK_ID = "PUT_YOUR_BOOK_ID_HERE";

//         console.log("\nBoth users will try to borrow the SAME book.\n");

//         //-------------------------------------------------
//         // Fire both requests simultaneously
//         //-------------------------------------------------

//         await Promise.all([

//             borrowBook(user1._id,"6a5dd4459559a28fd3d89f21"),

//             borrowBook(user2._id, "6a5dd4459559a28fd3d89f21")

//         ]);

//         console.log("\n===============================");
//         console.log(" TEST FINISHED ");
//         console.log("===============================\n");

//     }
//     catch (error) {

//         console.log(error.message);

//     }
//     finally {

//         await mongoose.disconnect();

//     }

// }


async function returnBook(borrowRecordId) {
    await connectDB();
    const session = await mongoose.startSession();

    try {

        await session.withTransaction(async () => {

            const borrowRecord = await BorrowRecord.findById(borrowRecordId)
                .session(session);

            if (!borrowRecord) {
                throw new Error("Borrow record not found.");
            }

            if (borrowRecord.status === "RETURNED") {
                throw new Error("Book has already been returned.");
            }

            const book = await Book.findById(borrowRecord.book)
                .session(session);

            if (!book) {
                throw new Error("Book not found.");
            }

            const user = await User.findById(borrowRecord.user)
                .session(session);

            if (!user) {
                throw new Error("User not found.");
            }

            borrowRecord.status = "RETURNED";
            borrowRecord.returnDate = new Date();
            await borrowRecord.save({ session });

            book.available = true;
            await book.save({ session });

            user.borrowedBooks--;
            await user.save({ session });

        });

        console.log("Book returned successfully.");

    } catch (error) {

        console.error(error.message);

    } finally {

        await session.endSession();

    }
}



async function borrowBook(userId, bookId) {

    await connectDB();

    const session = await mongoose.startSession();

    let attempt = 0;

    try {

        await session.withTransaction(async () => {

            attempt++;

            console.log("\n================================");
            console.log(`Transaction Attempt: ${attempt}`);
            console.log("================================");

            // Find User
            const user = await User.findById(userId).session(session);

            // Find Book
            const book = await Book.findById(bookId).session(session);

            console.log("Book Available:", book.available);

            if (!book.available) {
                throw new Error("Book is already borrowed.");
            }

            console.log("Waiting 5 seconds...");
            await new Promise(resolve => setTimeout(resolve, 5000));

            console.log("Creating Borrow Record...");

            await BorrowRecord.create(
                [{
                    user: userId,
                    book: bookId,
                    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                }],
                { session }
            );

            console.log("Updating Book...");

            book.available = false;
            await book.save({ session });

            console.log("Updating User...");

            user.borrowedBooks++;
            await user.save({ session });

            console.log("Callback Finished");

        });

        console.log("Transaction Committed");

    }
    catch (err) {

        console.log("Transaction Failed");
        console.log(err.message);

    }
    finally {

        await session.endSession();

    }

}


async function testRetry() {
    await connectDB();

    const bookId = "6a5dd4313aafe93ec640bb0f";

    const user1 = "6a5de15ddda88dadc0b552b3";

    const user2 = "6a5e055002737dbf553d7cee";

    await Promise.all([

        borrowBook(user1, bookId),

        borrowBook(user2, bookId)

    ]);

}


const createUser = async () => {

  try {
    await connectDB();
    const user = await User.create({
      firstName: "Hanzala",
      lastName: "Naseer",
      email: "hanzala@example.com",
      role: "user"
    });

    console.log("User Created:");
    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
};




async function testVirtualGetter() {

    try {
        await connectDB();

        const user = await User.findOne();

        if (!user) {
            console.log("No user found.");
            return;
        }

        console.log(user.toObject());

        console.log(user.toJSON());

        console.log("First Name :", user.firstName);
        console.log("Last Name  :", user.lastName);

        console.log("Full Name  :", user.fullName);

    } catch (error) {

        console.error(error);

    }

}



async function testVirtualSetter() {

    try {
        await connectDB();

        const user = await User.findOne({
            email: "hanzala@example.com"
        });


        if (!user) {
            console.log("User not found");
            return;
        }


        console.log("\n========== BEFORE ==========");

        console.log("First Name :", user.firstName);
        console.log("Last Name  :", user.lastName);
        console.log("Full Name  :", user.fullName);



        user.fullName = "Ahmed Ali";


        console.log("\n========== AFTER SETTER ==========");

        console.log("First Name :", user.firstName);
        console.log("Last Name  :", user.lastName);
        console.log("Full Name  :", user.fullName);



        await user.save();


        console.log("\nUser Updated Successfully");


        const updatedUser = await User.findOne({
            email: "hanzala@example.com"
        });


        console.log("\n========== FROM DATABASE ==========");

        console.log("First Name :", updatedUser.firstName);
        console.log("Last Name  :", updatedUser.lastName);
        console.log("Full Name  :", updatedUser.fullName);


    } catch(error) {

        console.error(error);

    }

}


// borrowBook("6a5e179b804909d2bb840070","6a5dd6f9e0e68244d8bd423c");

async function testVirtualPopulate(){

    try {

        await connectDB();

        const user = await User
            .findOne({
                email:"hanzala@example.com"
            })
            .populate("borrowRecords");


        if(!user){

            console.log("User not found");
            return;

        }


        console.log("\n========== USER ==========");

        console.log("Name:", user.fullName);

        console.log("Email:", user.email);


        console.log("\n========== BORROW RECORDS ==========");


        console.log(user.borrowRecords);


    } catch(error){

        console.error(error);

    }

}





async function testNestedPopulate() {

    try {
        await connectDB();
        const user = await User
            .findOne({
                email: "hanzala@example.com"
            })
            .populate({
                path: "borrowRecords",
                populate: {
                    path: "book"
                }
            });


        if (!user) {
            console.log("User not found");
            return;
        }


        console.log("\n========== USER ==========");

        console.log("Name:", user.fullName);
        console.log("Email:", user.email);



        console.log("\n========== BORROW RECORDS ==========");


        user.borrowRecords.forEach((record, index) => {

            console.log(`\n--- Borrow Record ${index + 1} ---`);

            console.log("Record ID:", record._id);

            console.log("Status:", record.status);

            console.log("Borrow Date:", record.borrowDate);

            console.log("Due Date:", record.dueDate);


            console.log("\nBook Details:");

            console.log("Book ID:", record.book._id);

            console.log("Title:", record.book.title);

            console.log("Category:", record.book.category);

        });


    } catch(error) {

        console.error(error);

    }


}


testNestedPopulate();
// testVirtualPopulate();

// testVirtualSetter();

// createUser();

// testVirtualGetter();





// testRetry();

// returnBook("6a5e01985c94cc44e4303800");

// testRaceCondition();

// testStaticMethods();


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