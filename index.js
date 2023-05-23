const express=require('express')
const bodyParser=require('body-parser')
const App=express()
const homePage=require('./routes/home')
const addTask=require('./routes/add_task')
const allTask=require('./routes/alltask')
App.use(bodyParser.urlencoded())
App.use('/',homePage)
App.use('/',addTask)
App.use('/',allTask)
App.use(express.static('public'));


App.listen(3000,()=>{
    console.log('server is working!')
})