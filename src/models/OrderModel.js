const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId


     const OrderSchema = new mongoose.Schema( {
     UserId:{
        type:ObjectId,
        ref:"User2",
    },
     ProductId:{
        type:ObjectId,
        ref:"Product",
     },
      amount: Number,
      isAppfreeUser:{
        type:Boolean,
        default: true
     },
     date: String

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema)
