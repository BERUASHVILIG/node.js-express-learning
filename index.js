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
// const { car1, car2 } = require("./car");

// console.log(JSON.stringify(car1, null, 2));
// console.log(JSON.stringify(car2, undefined, 2));

// learn node file system and path modules

const path = require("path");

const filePath = "C:UsersUserDesktop/node.js-tutorial-express/files/sample.txt";

// directory name
// console.log(path.dirname(filePath), "dirname");
// basename
// console.log(path.basename(filePath), "basename");
// extension
// console.log(path.extname(filePath), "extension");

// const sampleFile = "sample.txt";
// console.log(path.join(path.dirname(filePath), sampleFile));

// file systeme module
const fs = require("fs");
const fsPromise = require("fs").promises;

// console.log(fs);

// reading from a file - Async
// fs.readFile(filePath, (error, data) => {
//   if (error) {
//     console.error("Error reading file:", error.message);
//   } else {
//     console.log(data.toString());
//   }
// });

// syncron way
// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, "files", "sample.txt"),
//     "utf-8"
//   );
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// using promise read file

// const fileReading = async () => {
//   const filePath = path.join(__dirname, "files", "sample.txt");
//   try {
//     const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
//     console.log("FS Promises", data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fileReading();

// Write in file

const textFile = path.join(__dirname, "files", "text.txt");
const content = "I am learning Node js";
// fs.writeFile(textFile, content, (error) => {
//   if (error) {
//     console.error("Error reading file:", error.message);
//   } else {
//     console.log("Write operation Completed Successfully");
//   }
//   fs.readFile(textFile, "utf-8", (error, data) => {
//     if (error) throw new Error("Error occurred");
//     console.log(data);
//   });
// });

const writingInFile = async () => {
  try {
    await fsPromise.writeFile(textFile, content);
    await fsPromise.appendFile(textFile, "\n This is file appender");

    // rename file
    await fsPromise.rename(
      textFile,
      (__dirname, path.join(__dirname, "files", "newtxt.txt"))
    );
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "newtxt.txt"),
      "utf-8"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

writingInFile();
