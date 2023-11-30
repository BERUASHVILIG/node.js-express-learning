// Read evaluate print loop

// The Node.js Console REPL (Read-Eval-Print Loop) is an interactive environment that allows you to enter JavaScript code
// and see the results immediately. It's a command-line interface where you can experiment with code snippets,
// test small pieces of logic, and interact with Node.js APIs in real-time.

const repl = require("repl");

// const local = repl.start("the node console started");
const local = repl.start("$");

local.on("exit", () => {
  console.log("exiting from repl");
  process.exit();
});
