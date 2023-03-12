const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/signup",async(req,res,next)=>{
    try {
        const {username,email,password} = req.body;
        const findUser = await User.findOne({email})
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt)
        if(!findUser){
            const newUser = new User({
                username,
                email,
                password:hash
            })
            const result = await newUser.save();
            return res.status(201).json(result)
        }else{
            return res.status(422).json({error:"email already exist"})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post("/signin",async(req,res,next)=>{
    try {
        const {email,password}=req.body
        const findUser = await User.findOne({email})
        if(findUser){   
            const passwordCheck = await bcrypt.compare(password,findUser.password)
            if(passwordCheck){
                const token = jwt.sign({user:findUser._id},"helloworldcongration")
                return res.status(200).json({message:"successfull login",token,result:findUser})
            }else{
                return res.status(422).json({error:"invalid credential"})     
            }
        }else{
            return res.status(422).json({error:"invalid credential"})
        }
    } catch (error) {
        console.log(error,"dsa");
        return res.status(500).json(error)
    }
})


module.exports =router