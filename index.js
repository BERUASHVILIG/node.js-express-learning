console.log("start learning");
console.log("continue learning node.js");

process.exit(3); //This syntax is the correct way to use the process.exit method.
// It exits the Node.js process with the specified exit code (in this case, 3).
process.exit = 3; // This syntax is assigning the value 3 to the exit property of the process object,
//  which is not the intended use of process.exit.
