const router = require("express").Router();
const Article = require("../model/Article")

router.post("/add",async(req,res,next)=>{
    try {
        const {author,score,views} =req.body
        const newArticle = new Article({
            author,
            score,
            views
        })
        const result = await newArticle.save();
        return res.status(201).json(result)
    } catch (error) {
        return res.status(500).json(error)   
    }
})

router.get("/all",async(req,res,next)=>{
    try {
        const result = await Article.aggregate([
            {
                $match:{
                    $or:[
                        {score:{$gt:70}},
                        {views:{$gt:555}}
                    ]
                }
            }
        ]);
        res.send(result)
    } catch (error) {
        
    }
})

module.exports = router;