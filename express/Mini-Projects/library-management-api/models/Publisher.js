


const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({

          name:{
            type:String,
            trim:true,
        },
        email:{
            type:String,
            trim:true,
            required:[true,"Email required !"],
            lowercase:true,
            unique:true


        },
        city:{
            type:String,
            trim:true,

        },
        countryCode:{
            type:String,
            uppercase:true,
            trim:true
        }


    
},

    
    
    {
    timestamps: true
});

const Publisher = mongoose.model("Publisher", publisherSchema);

module.exports = Publisher;
