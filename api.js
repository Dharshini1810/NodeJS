const axiosrequest = require('axios')
var api = "https://jsonplaceholder.typicode.com/posts" 
async function hello(){
    var res = await axiosrequest.get(api)
    try{
        console.log(res)
    }catch{
        console.log(res)
    }
}
hello();