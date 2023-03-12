const router = require("express").Router();
const Inventory = require("../model/Inventory");

router.post("/add",async(req,res,next)=>{
    try {
        const {item,qty,tags} = req.body
        console.log(req.body,"body");
        const newInventory = new Inventory({
            item,qty,tags
        })
        const result = await newInventory.save();
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
    }
})

router.get("/all",async(req,res,next)=>{
    try {
        const result = await Inventory.find({qty:{$in:[15]}});
        return res.status(200).json(result)
    } catch (error) {
        
    }
})

module.exports = router;