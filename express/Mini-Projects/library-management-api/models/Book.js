const mongoose=require("mongoose");



const bookSchema=new mongoose.Schema({
    title:String,
    author:String,
    price:Number,
    available:Boolean,
    tags:[String],
    publisher:{
        name:String,
        city:String
    },
    reviews:[
        {
            user:String,
            rating:Number
        }
    ]
});

const Book=mongoose.model("Book",bookSchema);
module.exports=Book;