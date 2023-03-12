const router = require("express").Router();
const Oder = require("../model/Oder");

router.post("/add",async(req,res,next)=>{
    try {
        console.log(req.body,"dfa");
        const newOrder = new Oder({
            products:req.body.products
        })
        const result = await newOrder.save();
        return res.status(201).json(result);
    } catch (error) {
        
    }
})

router.get("/all",async(req,res,next)=>{
    try {
        const order = await Oder.aggregate([
            {
                $project:{
                    products:{
                        $first:{
                            $filter:{
                                input:"$products",
                                as:"produ",
                                cond:{$gt:["$$produ.cost",10]}
                            }
                        }
                    }
                }
            }
        ]);
        return res.status(200).json(order)
    } catch (error) {
        
    }
})

module.exports = router