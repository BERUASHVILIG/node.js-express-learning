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
// it did not wait, yet it console logged after console.log("do something else..."); this
