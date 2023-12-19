console.log("start operation");

const sleep = async (milliseconds) => {
  console.log("operation is running");
  setTimeout(() => {
    console.log("Operation is done");
  }, milliseconds);
};

sleep(1000);

console.log("do something else...");

// this example  is async setTimeout accept callback function and execute after 1 millisecond but int this time
// it did not wait, yet it console logged after console.log("do something else..."); this..

// When you have an asynchronous operation in JavaScript, here's how it generally works:

// 1. Call Stack: The asynchronous function is initially called and added to the call stack.
// If it contains an asynchronous operation (like setTimeout, API request, etc.), the control is passed to the Web API.

// 2. Web API: The asynchronous operation is performed outside the JavaScript runtime environment
// (e.g., by the browser or Node.js runtime). Examples include timers (like setTimeout), DOM events, AJAX requests, etc.

// 3. Callback Queue (Task Queue): Once the asynchronous operation is complete, a callback function is placed in the callback queue.

// 4. Event Loop: The event loop constantly checks the callback queue. If the call stack is empty, it takes the first callback
//  from the queue and pushes it onto the call stack, where it can be executed.

// In the case of setTimeout, when the timer expires, the associated callback is placed in the callback queue.
// The event loop then moves it to the call stack when the call stack is empty, and the callback gets executed.
// This asynchronous nature allows JavaScript to handle time-consuming operations without blocking the main execution thread.
