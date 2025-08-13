console.log("Unknown , Never , Any");
//unknown types
//user input kuch bhi ho sakta hia 
var userInput;
//let userInput:any;
var userName;
userInput = 10;
userInput = "Raju";
//difference between any and unknown : 
//any: kuch bhi value possible hai , koi bhi value assign krr sakte ho 
//unknown : kuch bhi nahi daala
//Type 'unknown' is not assignable to type 'string'.
// userName=userInput
if (typeof userInput === "string") {
    userName = userInput;
}
//never return type 
//yeh kuch nahi return nahi krr raha , not even returning a message
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal Server Error,error aa gaya", 500);
console.log(res);
