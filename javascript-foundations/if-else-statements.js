// A simple if statement
let delhiTemp = 20;
let banglTemp = 25;

if (delhiTemp > banglTemp){
   console.log("Delhi is hotter than Bangalore");
}
else {
    console.log("Delhi is not hotter than Bangalore")
}

// Using an if else if else block
let num = 10;

if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// Generally
if(condition1){
// Do here
}
 else if (condition2){
    // Do here
 } else if (condition3) {
 // Do here
 } else {
    // Do here
 }


 let myAge = 30;
 if (myAge > 20) {
    console.log("You are an adult")
 }
 else{
    console.log("You are still young")
 }

//   Ternary operator
myAge = 30;
const isAdult = myAge > 20 ? 'Adult' : 'Young';
console.log(isAdult);

console.log(myAge < 60 ? 'Working' : 'Retired')

// Nested ternary operator
myAge = 15;
const youthCalculator = myAge > 18 ? 'Adult' : myAge > 12 ? 'Teen' : 'Kid';
console.log(youthCalculator);

// Convert it into arrow function
const youthNess = (age) => {
    return age > 18 ? 'Adult' : age > 12 ? 'Teen' : age > 5 ? 'Kid' : 'Toddler';
};

myAge = 4;
const youth = youthNess(myAge);

// Template literal - use back ticks ``
console.log(`Based on the given age - ${myAge}, the person is ${youth}`)

// back ticks help us create multi-line strings
// console.log(` Hello
//     World
//     `);

// // \n is a newline character
// console.log("Hello\nWorld")