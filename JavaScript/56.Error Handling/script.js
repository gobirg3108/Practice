// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection
// try {} = Encloses code that might potentially cause an error
// catch {} = Catch and handle any thrown Errors from try {}
// finally {} = (optional) Always executes. Used mostly for clean up
// ex: close FileSystem,close connections,release resources

// try {
//   console.log(x);
//   // NETWORK ERRORS
//   // PROMISE REJECTION
//   // SECURITY ERRORS
// } catch (error) {
//   console.log(error);
// } finally {
//   // CLOSE FILES
//   // CLOSE CONNECTION
//   // RELEASE RESOURCES
//   console.log("This is always executes");
// }

// console.log("You have reached the end");

try {
  const dividend = Number(window.prompt("Enter a dividend : "));
  const divisor = Number(window.prompt("Enter a divisor : "));

  if (divisor == 0) {
    throw new Error("You can't divided by zero");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values Must Be a Number");
  }
  const result = dividend / divisor;

  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end");
