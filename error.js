// Error object

const error = new Error("something went wrong!");
const { CustomeError } = require("./CustomeError");

const { reject } = require("lodash");
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error object!");

// throw new CustomeError("This is CustomeError!!");

// handle exception using try and catch

// try {
//   doSomething();
// } catch (error) {
//   console.log("Error ocurred!");
//   console.log(error);
// }

function doSomething() {
  const data = fetch("localhost:300/api");
  console.log("I am from do somthing");
  //   const data = "I am from do somthing";
  return data;
}

// Uncaught exception

// process.on("uncaughtException", (error) => {
//   console.log("There was uncaught error", error);
//   process.exit(1);
// });
// doSomething();

// Exception with promises

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Error occured!");
//     console.log(error);
//   });

//   Exception using Async Await

const someFunction = async () => {
  try {
    await doSomething();
  } catch (error) {
    throw new CustomeError(error.message);
  }
};
someFunction();
