//OBJECT , ARRAY , TUPLE , ENUM 

//object
console.log("let learn obj ...................");

const personn:{
    firstName : string;
    age : number;
    xyz:{
        address:string;
        pin:number;
    }
}={
    firstName:"Hri",
    age:21,
    xyz:{
        address:"Jammu",
        pin:180002
    }
}
// agar koi property exist nahi karti and we're using it 
// then we will get undefined but in case of Js we will be getting error

console.log(personn);

//Array
console.log("Learning Array..........");
const person:{
    firstName : string;
    age : number;
    skills:string[]
}={
    firstName:"Hri",
    age:21,
    skills:["AWS","ReactJS"," Node-Js"]  
}
console.log(person);