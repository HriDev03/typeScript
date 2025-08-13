console.log("Unknown , Never , Any")
//unknown types
//user input kuch bhi ho sakta hia 
let userInput:unknown;
// let userInput:any;//kuch bhi value ho sakti hai 
//let userInput:any;
let userName:string;

userInput = 10;
userInput = "Raju"

//difference between any and unknown : 

//any: kuch bhi value possible hai , koi bhi value assign krr sakte ho 
//unknown : kuch bhi nahi daala


//Type 'unknown' is not assignable to type 'string'.
// userName=userInput

if(typeof userInput==="string"){
    userName=userInput
}

//never return type :since this will never return anything , not even print
//yeh kuch nahi return nahi krr raha , not even returning a message
function generateError(message:string,code:number):never{
    throw {message:message,statusCode:code}
}

const res=generateError("Internal Server Error,error aa gaya",500)
console.log(res);