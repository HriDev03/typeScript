//function to have sum of two numbers
function add(num1:number,num2:number,printRes:boolean,someText:string){
    if(printRes){
        console.log(` ${someText}`,num1+num2);
    }else{
        return num1+num2;
    }
}

let n1:number= 20;
let n2:number= 30;
let printRes:boolean=true;
let someText="Sum of two numbers is : "
// string + number = string concatination
let ans:number|undefined = add(n1,n2,printRes,someText)
console.log(ans);

                    