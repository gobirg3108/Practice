// Callback Hell = Situation in JavaScript where callbacks are nested
//                 within other callbacks to the degree where the code
//                 is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 USe Promises + async/await to avoid callback hell.

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 is completed");
    callback();
  }, 3000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 is completed");
    callback();
  }),
    3000;
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 is completed");
    callback();
  }, 1500);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 is completed");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All Task Completed");
      });
    });
  });
});
