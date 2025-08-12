let firstName:string
firstName="Hridy"

let age:number
age=20

// UNION , |->pipe in typescript , we use union when we need to use multiple data type

function combine(num1:number|string,num2:number|string){
    let result:number|string;
    if( typeof num1==="number" && typeof num2==="number"){
        result=num1+num2;
    }else{
        result=num1.toString() + num2.toString()
    }
    return result
}

//yeh jo combine function hai yeh dono number are string ko handle kare
let stringAns:number|string = combine("Hridyesh"," Sharma")// Hridyesh Sharma'
console.log(stringAns);

let numAns:number|string = combine(10,20)//30
console.log(numAns);


//LITERAL TYPES : it is made from union here we make our own type,

// yaha humm apne khud ka type banate hai , instead of standard types jaise humne conversionType bheja

function combining( num1:number|string, num2:number|string ,conversionType:"as-number"|"as-string"){
    let result:number|string;

    if( typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
        result= Number(num1) + Number(num2);
    }else{
        result=num1.toString() + num2.toString()
    }
    
    return result
}

//yeh jo combine function hai yeh dono number are string ko handle kare

let sum1:number|string = combining(10,20,"as-number")//30

let sum2:number|string =combining(10,"50","as-number")//60

let combinedName:number|string =combining("Hridyesh"," Sharma","as-string")// Hridyesh Sharma'

console.log(sum1,sum2,combinedName);


//TYPE ALIAS / CUSTOM TYPES

//abb yaha pe number|string baar baar repeat ho raha hai to tackle it we can make our own type

type numstr = number|string
type ConversionType = "as-number"|"as-string"

function combinee( num1:numstr , num2:numstr ,conversionType:ConversionType):numstr{

    let result:numstr;

    if( typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
        result= Number(num1) + Number(num2);
    }else{
        result=num1.toString() + num2.toString()
    }
    return result

}

type human={
    name:string,
    age:number
    skills:string[]
}

const user:human={
    name:"Hridy",
    age:19,
    skills:["playing","React","Node"]
}

function greet(user:human){
    console.log(`Hello i am ${user.name}`);
}

greet(user)