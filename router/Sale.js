const router = require("express").Router()

router.post("/add",(req,res,next)=>{
    try {
        const {items} = req.body
        console.log(req.body,"items");
    } catch (error) {
        
    }
})

module.exports = router