const axiosrequest = require('axios')
var api = "https://jsonplaceholder.typicode.com/posts" 
async function hello(){
    var res = await axiosrequest.get(api)
    try{
        console.log(res[x])
    }catch{
        console.log(res)
    }
}
hello();