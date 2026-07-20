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

bookSchema.pre("save", function (next) {

    console.log("Before saving book...");
    console.log(this.title="Advanced Advanced JSSSSS");


});

bookSchema.pre("save", function (next) {

    console.log(this.author);


});


bookSchema.pre("save", function (next) {

    console.log(this.price);


});

const Book=mongoose.model("Book",bookSchema);
module.exports=Book;