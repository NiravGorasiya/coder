const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    managerId:{
        type:Number
    },
    dateOfJoining:{
        type:Date
    },
    city:{
        type:String
    }
})

module.exports =mongoose.model("EmployeeSalary",employeeSchema)