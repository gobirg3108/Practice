//  callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations :
//            1. Reading a file
//            2.Network requests
//            3.Interacting with databases

//            "Hey, when you're done, call this next."
hello(goodBye);

function hello(callback) {
  console.log("Hello");
  callback();
}

function goodBye() {
  console.log("GoodBye!");
}
