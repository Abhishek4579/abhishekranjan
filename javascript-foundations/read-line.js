// // Take input from the user
// // commonjs
// const readline = require('readline'); 

// // // Create an interface to read from the terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt the user for input
// rl.question('Please enter your age: ', (age) => {
//   // Output the user's input
//   console.log( age > 60 ? 'Senior Citizen' : age > 18 ? 'Adult' : age > 12 ? 'Teen' : age > 5 ? 'Kid' : 'Toddler');

//   // Close the readline interface
//   rl.close();
// });

const trafficColor = 'Yellow';
console.log(trafficColor == 'Green' ? 'Move forward' : trafficColor == 'Yellow'? 'Get ready' : 'Stop there')

// // prompt is not available in node directly
// const userName = prompt("Enter your name : ")
// console.log(`The entered name is ${userName}`)