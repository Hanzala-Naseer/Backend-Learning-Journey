const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        unique: true
    },

    country: {
        type: String,
        trim: true
    },
    publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
    required: true
}
}, {
    timestamps: true
});

authorSchema.pre("save", function (next) {
    console.log("Before saving author...");


});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;