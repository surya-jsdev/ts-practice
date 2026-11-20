// Simple Function
function add(a:number,b:number):number{
    return a + b
}
const result =add(2,5)
console.log(result)

// Greet 
function greet(name:string,title?:string):string{
    return `Hello ${title}.${name} `
}

const Greet=greet("surya","Mr");
console.log(Greet)

// Calculate
function Calculate (prices:number[]){
    return prices.reduce((acc,total)=>acc+total ,0)
}
console.log(Calculate([10,10]))

// log Message

function logMessage(msg:string):void{
   console.log(msg);
}
logMessage("Good Morning")