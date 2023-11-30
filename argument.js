const minimist = require("minimist");
// console.log(process.argv.slice(2)[1]);

// process.argv.forEach((val, index) => {
//   return console.log(`index ${index} value is ${val}`);
// });

const argNew = minimist(process.argv.slice(2));

const argument = argNew.name;
console.log(argument);

// in this file is how can we give argument from terminal "node argument.js name=gio surname=beruashvili"
//  using this line we can access to arguments, console.log(process.argv.slice(2)[1]);  also learn how can i use
//  minimist package to access argument using its name for example "node argument.js --name=gio" can access to
//  use  const argNew = minimist(process.argv.slice(2));   console.log(argNew.name);
