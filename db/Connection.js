const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/movie")
.then(()=>{
    console.log("successfull database connection");
})
.catch((err)=>{
    console.log("connection faild");
})