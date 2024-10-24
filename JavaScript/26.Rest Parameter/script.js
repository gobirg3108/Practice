// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array.

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

// Ex : 1

// function openFridge(...foods) {
//   console.log(...foods);
// }
// function getFoods(...foods) {
//   return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// const foods = getFoods(food1, food2, food3, food4);
// console.log(foods);

// openFridge(food1, food2, food3, food4);

// Ex : 2

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1,2,3,4);

// console.log(`Your Total is $${total}`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const total = getAverage(80,54,23,58);

// console.log(`Your Total is $${total}`);

// Ex:3
function combineStrings(...strings) {
  return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Gobinath", "Ramalingam");

console.log(fullName);
