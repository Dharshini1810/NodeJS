//various types pf object creation in js 
//1.
var a=new Object(); 
a.name="Atlas"
a.age=12 
a.hello=function(){
    return 1
}
console.log(a)

//2.
var b={
    name:"Lily",
    age:12, 
    hello:()=>{
        console.log("hello")
    }
}
console.log(b)

//3.
var c=Object.create(b)
console.log(c.name)

//4.
class A{
    name="Ryle"
    age=12
}
var d=new A();
console.log(d)

//5. 
function hello(){
    this.name="hello"
    this.age=12
}
var e=new hello()
console.log(e)
