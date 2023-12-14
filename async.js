console.log("start operation");

const sleep = (milliseconds) => {
  const startTime = new Date().getTime();
  console.log("operation is running");
  while (new Date().getTime() < startTime + milliseconds) {
    console.log("in progress");
  }
  console.log("Operation is done");
};

sleep(1000);

console.log("do something else...");

// In synchronous programming, the program executes one operation at a time,
// and it waits for each operation to finish before moving on to the next one.
