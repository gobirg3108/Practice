// function declaration = define a reusable block of code
//                        that performs a specific task

// function expression = a way to define functions as values or variables

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

const numbers = [1, 2, 3, 4, 5, 6, 7];

// Map Method

const square = numbers.map(function squareNum(element) {
  return Math.pow(element, 2);
});

console.log(square);

const cube = numbers.map(function cubeNum(element) {
  return Math.pow(element, 3);
});

console.log(cube);

//Filter Method

const evenNum = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNum = numbers.filter(function (element) {
  return element % 2 !== 0;
});

console.log(evenNum);
console.log(oddNum);

// Reduce Method

const max = numbers.reduce(function (accumulator, element) {
  return Math.max(accumulator, element);
});

const min = numbers.reduce(function (accumulator, element) {
  return Math.min(accumulator, element);
});
console.log(max);
console.log(min);
