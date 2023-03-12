const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    products:Array
})

module.exports = mongoose.model("Order",orderSchema)