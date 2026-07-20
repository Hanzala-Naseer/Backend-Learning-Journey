const mongoose=require("mongoose");



const bookSchema=new mongoose.Schema(
    {
    title:{
        type:String,
        trim:true,
        required:[true,"Title is required"],
        validate:{
            validator:function(value){
                return value.length>=5;
            },
            message:"Title must contain at-least 5 characters ! "
        }
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
        required:[true,"Author is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[0,"Price can't be a negative number!"]
    },
    available:{
        type: Boolean,
        default: true
    },
category: { 
  type: String, 
  trim:true,
  required: [true, "Category is required"], 
  enum: {
    values: ["Programming", "Novel", "Science", "History", "Biography"],
    message: "{VALUE} is not a valid category"
  }
},
        
        
    tags:{
        type:[String],
        validate:{
            validator:function(value){
                if(this.category!=="Programming"){
                    return true
                };
                return value.length>0;
            },
            message:"Programming books must have atleast 1 tag !"
        }
    },
    publisher:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Publisher",
      required:[true,"Publisher is required! "]
        
    },
    reviews:[
        {
            user:String,
            rating:{
                type:Number,
                min:[1,"Rating must be atleast 1 !"],
                max:[5,"Maximum rating will be 5 !"]
            }
        }
    ],
    isbn:{
        type:String,
        validate:{
            validator:async function(value){
                const existingBook=await Book.findOne({
                    isbn:value
                });


                return !existingBook;

            },
            message:"Book with same isbn already exists !"
        }

    }
},
{
    timestamps:true
}
);


bookSchema.pre("save", function () {

    if (this.price > 5000) {
        throw new Error("Book price exceeds allowed limit.");
    }

});


bookSchema.pre("save", function (next) {

    console.log("Before saving book...");
    this.title="Advanced Advanced JSSSSS";
    console.log(this.title);


});

bookSchema.pre("save", function (next) {

    console.log(this.author);


});


bookSchema.pre("save", function (next) {

    console.log(this.price);


});

bookSchema.post("save", function (doc) {
    console.log("Book saved successfully");
});

bookSchema.post("save", function (doc) {
    console.log("Doc:",doc);
});

bookSchema.post("save", function (doc) {
    console.log("Updated Title:", doc.title);
});


bookSchema.post("save", function (doc) {
  console.log("[ Created at:", new Date().toLocaleString(), "]");

});


bookSchema.post("save",function(doc){
    console.log(`Notification: ${doc.title} is now available.`)
})




bookSchema.pre("find", function(){

    console.log("Before finding books");

});

bookSchema.pre("find", function(){

    console.log(this);

});


bookSchema.pre("find", function(){

    this.where({
        available:true
    });

});

bookSchema.methods.getSummary=function(){

    return `${this.title} costs ${this.price}`;

    
}


bookSchema.methods.getTitle = function () {

    return this.title;

};


bookSchema.methods.isExpensive = function () {

    return this.price > 1000;

};

bookSchema.statics.findByCategory = function(category){

    return this.find({
        category: category
    });

};



bookSchema.statics.findAvailableBooks = function(){

    return this.find({
        available:true
    });

};



bookSchema.statics.findBooksByPriceRange = function(min,max){

    return this.find({
        price:{
            $gte:min,
            $lte:max
        }
    });

};



bookSchema.statics.countBooksByCategory = function(category){

    return this.countDocuments({
        category:category
    });

};



bookSchema.statics.searchBooks = function(keyword){

    return this.find({
        title:{
            $regex:keyword,
            $options:"i"
        }
    });

};


bookSchema.methods.applyDiscount = function (percent) {

    const discountAmount = (this.price * percent) / 100;

    this.price = this.price - discountAmount;

    return this.price;

};


bookSchema.methods.getBookInfo = function () {

    return `${this.title} - Category: ${this.category}`;

};


bookSchema.methods.isProgrammingBook = function () {

    return this.category === "Programming";

};
const Book=mongoose.model("Book",bookSchema);





module.exports=Book;