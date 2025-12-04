setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//Anonymous function example
setTimeout(function(){
    console.log("Demonstrating the anonymous function callbacks");
},2000);


console.log("The application is started");

//Arrow function example
setTimeout(()=>{
    console.log("Demonstrating the arrow function callbacks");
},2000);


console.log("The application is started");
