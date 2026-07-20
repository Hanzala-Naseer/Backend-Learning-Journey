const mongoose = require("mongoose");

const borrowRecordSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },

    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: [true, "Book is required"]
    },

    borrowDate: {
        type: Date,
        default: Date.now
    },

    dueDate: {
        type: Date,
        required: true
    },

    returnDate: {
        type: Date,
        default: null
    },

    status: {
        type: String,
        enum: ["BORROWED", "RETURNED"],
        default: "BORROWED"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("BorrowRecord", borrowRecordSchema);