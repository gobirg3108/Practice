// .filter() = creates a new array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNum = numbers.filter(isEven);

// let addNum = numbers.filter(isAdd)

// console.log(addNum);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isAdd(element) {
//   return element % 2 !== 0;
// }

// const ages = [15, 17, 21, 18, 26, 23, 28, 30];
// let adults = ages.filter(isAdults);
// console.log(adults);

// function isAdults(element) {
//   return element > 18;
// }

const fruits = ["apple", "orange", "banana", "cherry", "kiwi", "pomegranate"];

const shortNames = fruits.filter(getShortWords);
console.log(shortNames);

function getShortWords(element) {
  return element.length > 8;
}
