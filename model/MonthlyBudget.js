const mongoose =require('mongoose')

const monthlyBudget = new mongoose.Schema({
    catgory:{
        type:String
    },
    budget:{
        type:Number
    },
    spent:{
        type:Number
    }
})

module.exports= mongoose.model("monthlyBudget",monthlyBudget)