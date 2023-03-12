const router = require("express").Router()
const User = require("../model/User")

router.post("/",(req,res,next)=>{
    try {
        const result = new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        })
        return res.status(201).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;