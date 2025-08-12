var firstName;
firstName = "Hridy";
var age;
age = 20;
// UNION , |->pipe in typescript , we use union when we need to use multiple data type
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
//yeh jo combine function hai yeh dono number are string ko handle kare
var stringAns = combine("Hridyesh", " Sharma"); // Hridyesh Sharma'
console.log(stringAns);
var numAns = combine(10, 20); //30
console.log(numAns);
//LITERAL TYPES : it is made from union here we make our own type,
// yaha humm apne khud ka type banate hai , instead of standard types jaise humne conversionType bheja
function combining(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = Number(num1) + Number(num2);
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
//yeh jo combine function hai yeh dono number are string ko handle kare
var sum1 = combining(10, 20, "as-number"); //30
var sum2 = combining(10, "50", "as-number"); //60
var combinedName = combining("Hridyesh", " Sharma", "as-string"); // Hridyesh Sharma'
console.log(sum1, sum2, combinedName);
function combinee(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = Number(num1) + Number(num2);
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var user = {
    name: "Hridy",
    age: 19,
    skills: ["playing", "React", "Node"]
};
