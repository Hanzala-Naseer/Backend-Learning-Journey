const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        required:true,
        trim:true
    },


    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },


    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    borrowedBooks: {
    type: Number,
    default: 0
}


},
{
    timestamps:true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}

);



userSchema.methods.isAdmin = function(){

    return this.role === "admin";

};

userSchema.virtual("fullName").get(function(){
    return this.firstName +" "+ this.lastName;
});


userSchema.virtual("fullName").set(function (value) {

    const parts = value.split(" ");

    this.firstName = parts[0];
    this.lastName = parts[1];

});


userSchema.virtual("borrowRecords", {

    ref: "BorrowRecord",

    localField: "_id",

    foreignField: "user"

});

const User = mongoose.model("User", userSchema);


module.exports = User;