const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    item:{
        type:Array
    },
    qty:{
        type:Number
    },
    tags:{
        type:Array
    }
})

module.exports =mongoose.model("Inventory",inventorySchema)