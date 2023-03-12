const  router = require('express').Router();
const { default: mongoose } = require('mongoose');
const Employeesalary = require("../model/EmployeeSalary")

router.post("/add",async(req,res,next)=>{
    try {
        console.log(req.body);
        const {fullname,managerId,dateOfJoining,city} = req.body
        const newEmployee = new Employeesalary({
            fullname,
            managerId,
            dateOfJoining,
            city
        })
        const result = await newEmployee.save();
        return res.status(201).json({result})
    } catch (error) {
        console.log(error);
    }
})

router.get("/all",async(req,res,next)=>{
    try {
       console.log("helllo");
        const result = await Employeesalary.find();
       
        return res.status(201).json(result)
    } catch (error) {
        
    }
})

module.exports = router;