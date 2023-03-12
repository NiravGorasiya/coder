const jwt = require("jsonwebtoken")
const User = require("../model/User")

const authUser=async(req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(422).json({message:"please enter valid token"})
    }
    const tokenArr = authorization.split(" ")
    const token = tokenArr[1]
    const user = jwt.verify(token,"helloworldcongration")
    if(user){
        const findUser=await User.findOne({_id:user.user})
        req.user = findUser
        next();
    }
}


module.exports = authUser;