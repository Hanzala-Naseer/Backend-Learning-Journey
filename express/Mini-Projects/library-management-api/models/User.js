const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    name:{
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
    }


},
{
    timestamps:true
});



userSchema.methods.isAdmin = function(){

    return this.role === "admin";

};



const User = mongoose.model("User", userSchema);


module.exports = User;