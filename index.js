// console.log("start learning");
// console.log("continue learning node.j");

// process.exit(3); //This syntax is the correct way to use the process.exit method.
// It exits the Node.js process with the specified exit code (in this case, 3).
// process.exit = 3; // This syntax is assigning the value 3 to the exit property of the process object,
//  which is not the intended use of process.exit.

// The process object is a global object in Node.js that provides information about the current Node.js process.
// It allows access to various properties and methods related to the process, such as environment variables,
// command-line arguments, and process-related events.

// const _ = require("lodash");

// const arr = [1, 3, 5, 32];

// console.log(_.chunk(arr)); // [ [ 1 ], [ 3 ], [ 5 ], [ 32 ] ]

// console.log(_.chunk(arr));

// lodash is a utility library that provides many helpful functions for working with JavaScript data structures,
//  including arrays and objects. It simplifies common programming tasks and helps to avoid reinventing the wheel.
// / Some of the features provided by lodash include:

// const cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "I am learning npm module",
//     e: "00",
//     T: "U",
//   })
// );

// import exported data
// const car = require("./car");
// const { data } = require("./car");
const { car1, car2 } = require("./car");

console.log(JSON.stringify(car1, null, 2));
console.log(JSON.stringify(car2, undefined, 2));
