const MonthlyBudget = require("../model/MonthlyBudget");

const router = require("express").Router()

router.post("/add",async(req,res,next)=>{
    try {
    const {category,budget,spent}=req.body
      const result = await MonthlyBudget.create({
        category,
        budget,
        spent
      })
      return res.status(201).json(result)
    } catch (error) {
        
    }
})

router.get("/all",async(req,res,next)=>{
    try {
        const result = await MonthlyBudget.aggregate([
            {
                $project:{
                    spent:1,
                    discount:{
                        $cond:[{$gte:["$spent",200]},50,5]
                    }
                }
            }
        ]);
        return res.status(200).json(result);
    } catch (error) {
        
    }
})
module.exports = router;