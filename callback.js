console.log("task start");
function asyncTask(cb) {
  console.log("task running");
  setTimeout(cb, 0);
}

asyncTask(() => console.log(name));

console.log("task end");
var name = "giorgi";

// Callback functions themselves are not automatically asynchronous. They can be executed synchronously
//  or asynchronously depending on how they are implemented. In your code, you are making the callback
//  function asynchronous by using setTimeout(cb, 0).
