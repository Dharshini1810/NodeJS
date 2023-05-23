const express=require('express')
const Route=express.Router()
const path=require('path')
const fs = require('fs')

Route.post('/',(req,res,next)=>{
    var task=req.body.task 
    fs.appendFileSync('tasks.txt','\n'+task); 
    res.sendFile(path.join(__dirname,'..','view/index.html')) 
})

module.exports=Route
