 const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required:true
    },
    price:{
        Indian :String,
        european:String

    },
    year: {
        type:Number,
        default:2021
     },
     tags: [String],
    authorName: String,
    totalPages:Number,
    stockAvailable:Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Mybook', bookSchema) //mybooks