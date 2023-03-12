const mongoose = require("mongoose")

const salesSchema = new mongoose.Schema({
    items:{
       type:Array,
    }
})

module.exports =mongoose.model("Sales",salesSchema)