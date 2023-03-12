const mongoose = require("mongoose")

const oderDetails = new mongoose.Schema({
    item:{
        type:String
    },
    price:{
        type:Number 
    },
    ordered:{
        type:Number
    }
})

module.exports = mongoose.model("OrderDetails",oderDetails)