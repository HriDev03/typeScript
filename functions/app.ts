console.log("TS FUNCTIONS");
// FUNCTION RETURN TYPE
function add(num1:number, num2:number):number{
    return num1+num2
}
console.log(add(10,20));

function greet(name:string):void{
    console.log(`Hi ${name}`);
}

//iss variable mai sirf function assign krr sakte hai
//this shoudnt be done not a good practice
/*
let combineFunction : Function
combineFunction=function(){}
combineFunction=add
console.log(combineFunction(1,3));
combineFunction=greet
*/

//good practice
//yeh combineFuncation ek function hai jo do numbers leke numbers return krr raha hai
let combineFunction:(a:number,b:number)=>number

// combineFunction=greet : yeh nahi krr sakte

combineFunction=add// jiss function match karta hai sirfvohi assign krr sakte hai 
console.log(combineFunction(10,20));

//function type ans callbacks
type callback=(n:number)=>void
function addHandle(num1:number,num2:number, cb:callback ){
    const result:number=num1+num2;
    cb(result)
}
              
addHandle(10,20,(result:number):void=>{
    console.log(result);
})