// const x = "1";
// const y = "2";

// console.log(x, y);

// %s format variable to string
// %d
// %i
// %o

// %s: Formats the corresponding argument as a string.
// %d or %i: Formats the corresponding argument as an integer.
// %o: Formats the corresponding argument as an object.

// console.log("I am %s and my age is %d", "Giorgi", 21);

// console.clear();
// console.count("I am Giorgi"); //1
// console.count("I am Giorgi"); //2
// console.count("I am Mari"); //1
// console.countReset("I am Giorgi"); // this will reset count and next same text "I am Giorgi" will be 1
// console.count("I am Giorgi"); //1
// console.count("I am Mari"); //2

//

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();
// console.trace() give information about code and it help in debugging

// measure function execution time

// const sum = () => console.log(`the sum of 2 and 3 is: ${2 + 3}`);
// const multiply = () =>
//   console.log(`the multiplication of 2 and 3 is: ${2 * 3}`);

// const measureTime = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("multiply()");
//   multiply();
//   console.timeEnd("multiply()");
// };

// measureTime();

// progress bar

// npm i progress package help to make progress bar and it shows dowloading imitaion in terminal

const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);

// chalk package is for give color console output
const chalk = require("chalk");

console.log(chalk.green("this is nodejs tutorial"));
