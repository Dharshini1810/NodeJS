const express=require('express')
const App=express()
const fs=require('fs') 
const path=require('path')

App.get('/allTask',(req,res,next)=>{
    var data=[];
    fs.readFile(path.join(__dirname,'..','tasks.txt'),(err, chunks)=>{
        if(err){
            console.log(err)
        }
        data.push(chunks.toString())
        console.log(data)
        res.send(data)
    })
})

module.exports=App