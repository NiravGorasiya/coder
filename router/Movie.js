const router = require("express").Router()
const Movie = require("../model/Movie")
const authUser = require("../middleware/Auth")

router.post("/add",authUser,async(req,res,next)=>{
    try {
        const {name} =req.body
        const newUser = new Movie({
            name
        })
        const result = await newUser.save();
        return res.status(200).json({message:"this user page",result})
    } catch (error) {
        return res.status(500).json({error:"error message"})
    }
})

router.get("/all",authUser,async(req,res,next)=>{
    try {
        const result = await Movie.find();
        return res.status(200).json({result})
    } catch (error) {
        
    }
})
module.exports = router