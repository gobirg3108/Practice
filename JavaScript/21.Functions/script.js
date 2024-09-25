// Function = A section of reuseable code.
//            Declare code once, use it whenever  you want.
//            call the function to execute that code.

function add(x, y) {
  let result = x + y;
  return result;
}

console.log(add(3, 2));

function subtract(x, y) {
  return x - y;
}

console.log(subtract(8, 4));

function multiplication(x, y) {
  return x * y;
}

console.log(multiplication(5, 6));

function division(x, y) {
  return x / y;
}

console.log(division(10, 2));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(22));

// use ternary operator

function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(2));

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// use ternary operator

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Gobi@gmail.com"));
console.log(isValidEmail("elonmusk.com"));
