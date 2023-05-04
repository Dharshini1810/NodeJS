//Callback Function Example 
function helloFromOriginalFn(callback){
    console.log('Hello from Original Function!')
    callback()
}
helloFromOriginalFn(function helloFromCallbackFn(){      //This is a callback function
    console.log('Hello From Callback Function!')        
})

//SetTimeout Function -  This function requires two arguments callback function and timeinterval
//You just need to make a function call by passing the function as argument 

setTimeout(()=>{    //callback function
    console.log('printing hello worlds after 2 secs')
},2000)

//Promise Example - It is more simple than callback, Promise is an object that 
//represents a value that may not be available yet, but will be at some point in the future. 
//A Promise can be in one of three states: pending, fulfilled, or rejected. 
//Promise constructor takes one argument which is callback function, the callback function takes two paramters resolve and reject(these two are functions)

const promise = new Promise((resolve,reject) => {      
    resolve('Hello World')
    reject('Exception Raised')
})
promise.then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})

//Example
const promise1 = new Promise((resolve,reject) => {
    resolve()
    setTimeout(()=>{
        reject('hello')
    },10000)
})
promise1.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

//Async and await -- Await keyword is only along with promises inside the async function only 
//The promise returned can be handled by try and catch

async function helloWorld(){
    const promise = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise is successfully executed!')
        },2000)
    })
    try{
        console.log(promise)
    }catch{
        console.log(promise)
    }
}

function main(){
    helloWorld(); 
    console.log('hello from main function!')
}
main()

//Async function with .then/.catch
//Using await keyword infront of promise returns the resolved value of the promise, for that you can't use .then, must use try and catch

async function sample(){
    const p = new Promise((resolve,reject)=>setTimeout(()=>{resolve('hi')},10000));
    p.then((result)=>{
        console.log(result)
    }).catch((result)=>{
        console.log(result)
    })
}

async function main(){
    await sample();
}
main()

