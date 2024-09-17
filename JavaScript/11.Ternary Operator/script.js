// TERNARY OPERATOR = A shortcut to if {} and else {} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse

let age = 21;
let message = age >= 18 ? "You're an adult " : "You 're a minor";
console.log(message);

let time = 12;
let greetings = time < 12 ? "Good Morning" : " Good Afternoon";

console.log(greetings);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are  Not a student";

// console.log(message);

let purchaseAmount = 1000;

let discount = purchaseAmount >= 1000 ? 10 : 0;

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
