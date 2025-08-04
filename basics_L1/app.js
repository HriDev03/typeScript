//function to have sum of two numbers
function add(num1, num2, printRes, someText) {
    if (printRes) {
        console.log("".concat(someText), num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var n1 = 20;
var n2 = 30;
var printRes = true;
var someText = "Sum of two numbers is : ";
// string + number = string concatination
var ans = add(n1, n2, printRes, someText);
console.log(ans);
