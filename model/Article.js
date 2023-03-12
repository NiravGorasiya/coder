const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    author:{
       type:String,
    },
    score:{
        type:Number
    },
    views:{
        type:Number
    }
})

module.exports =mongoose.model("Article",articleSchema)