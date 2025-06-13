// setTimeout () = function in javascript that allows you to schedule
//                  the execution of a function after an amount of all time (milliseconds)
//                  Times are approximate (varies based on the workload of the javascript)

// setTimeout(useCallback,delay)
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

// function sayHello() {
//   window.alert  (`Hello`);
// }

// setTimeout(sayHello, 3000);

// Anonymous function

// setTimeout(function () {
//   window.alert(`Hello`);
// }, 3000);

//Arrow Function

// setTimeout(() => window.alert("Hello"), 5000);

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("hello"), 3000);
  console.log("STARTER");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEAR");
}
