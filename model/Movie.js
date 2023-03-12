const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

module.exports =mongoose.model("Movie",movieSchema)