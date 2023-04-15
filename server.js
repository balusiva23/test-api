const express = require("express");

const app = express();

const apiRouter = require("./routes");
//middeware
app.use("/api",apiRouter);

require("dotenv").config();
//require("dotenv").config({path:"./config.env"});

app.get("/",(req,res)=>{
   // res.json({"msg":"working"});//,envs: process.env.SECRET_KEY
   res.sendFile(__dirname+"/html/index.html");
})

app.get("*",(req,res)=>{
    res.json({msg:"Route Not Found"})
})

app.listen(process.env.PORT || 4000,()=>{
    console.log("srver running");
    //console.log(process.env.PORT);
})