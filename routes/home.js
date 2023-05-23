const express=require('express')
const Route=express.Router()
const path=require('path')

Route.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','view/index.html')) 
})

module.exports=Route
