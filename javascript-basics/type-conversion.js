let numStr = "10";
// let result = numStr + 5;
console.log(result);
console.log(typeof result); // string

console.log("10" + "5")

// // Adding two numbers
num1 = 10;
num2 = 50;
console.log(num1 + num2)

// Adding two strings
numStr1 = "10";
numStr2 = "50";
console.log(numStr1 + numStr2)

// //What happens when I try to add a number to a string
console.log(num1 + numStr1)

// What happens if I try to subtract a number from a string
console.log(numStr2 - num1)

var bool = true;
console.log(typeof bool)

// // What would happen if I add a boolean to a number
var result = bool + "5";
console.log(typeof result); // number
console.log(result); // 6
console.log("false" + "5")

let nullVal = null;
let result = nullVal + "5";
console.log(typeof result); // number
console.log(result); // 5

console.log(6 + "7" + 8)

// // string to number
let bool = false
result = Number(bool)
console.log(result); // 324
console.log(typeof result)
console.log(Number("ahjbvefhf"))

console.log(5+6+"7")
console.log('5' + 6 + 7)
//number to string
let result;
result = String(325);
console.log(result);  // "325"
console.log(typeof result)

result = String(2 + 5);
console.log(result); // "7"
console.log(typeof result)

// //other data types to string
result = String(undefined);
console.log(result); // "undefined"

result = String(null);
console.log(result); // "null"

result = String(true);
console.log(result); // "true"

result = String(NaN);
console.log(result); // "NaN"

// //using toString()
result = (324).toString();
console.log(result); // "324"

result = false.toString();
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

console.log(String(null));

