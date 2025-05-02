// arrow functions = a concies way to write function expression
//                   good for simple that you use only oncuechange
//                   (parameters) => some code

// const hello = (name, age) => {
//   console.log(`You are name is ${name} and you are age is ${age}`);
// };

// hello("Gobi", 22);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const square = numbers.map((element) => Math.pow(element, 2));

const cubes = numbers.map((element) => Math.pow(element, 3));

const evenNum = numbers.filter((element) => element % 2 === 0);

const oddNum = numbers.filter((element) => element % 2 !== 0);

const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(square);

console.log(cubes);

console.log(evenNum);

console.log(oddNum);

console.log(total);
