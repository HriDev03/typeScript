//OBJECT , ARRAY , TUPLE , ENUM 

//object
console.log("////////////////////////////////////////////////////////");
console.log("let learn obj ...................");

const personn:{
    firstName : string;
    age : number;
    address:{
        city:string;
        pin:number;
    }
}={
    firstName:"Hri",    
    age:21,
    address:{
        city:"Jammu",
        pin:180002
    }
}

// agar koi property exist nahi karti and we're using it 
// then we will get undefined but in case of Js we will be getting error
console.log(personn);

console.log("////////////////////////////////////////////////////////");
//Array
console.log("Learning Array rn ..........");
const person:{
    firstName : string ;
    age : number ;
    skills:string[] //array of strings hai  
}={
    firstName:"Hri",
    age:21,
    skills:["AWS","ReactJS"," NodeJs"]  
}

let favourite_Language:string[];
favourite_Language=["Js","Cpp","ReactJs","Dogri","Hindi","English"]

//to type safety 
let favourite_Language2:any[];
favourite_Language2=["Js","Cpp","ReactJs",14,true,"English"]

console.log(favourite_Language[1]);
console.log(person); 

// Tuple
console.log("////////////////////////////////////////////////////////");

console.log("Learning tuple .............. ");

const human:{
    name:string;
    age:number;
    skills:string[];
    //this is a tuple with fixed number of elements 
    //and specific data types for each position
    //fixed array of two types :0->Number , 1->string
    product:[number,string]

}={
    name:"Sharma",
    age:21,
    skills:["ReactJs","Node","Ts"],
    //roduct mai 2 cheeze hongi number , string
    product:[10,"Macbook M2"]
}

console.log(human.product[1]);
//fixed number of elements with fixed data types and fixed position
//tupple : an array with different data types , fixed number of elements 
//each element has different types of element at each index
console.log("////////////////////////////////////////////////////////");

console.log("Learning Enums....................");

enum Role{ ADMIN , AUTHOR , READ_USER_ONLY }

const insaan={
    name:"Hri",
    age:21,
    skills:["React Js","Node Js"],
    product:[10,"Macbook air m2"],
    role:Role.ADMIN
}

if(insaan.role===Role.AUTHOR){
    console.log("Welcome Author");
}else if(insaan.role==Role.ADMIN){
    console.log("Welcome Admin");
}else{
    console.log("Welcome User");
}


