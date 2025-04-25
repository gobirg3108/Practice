// Array = a variable like structure that can hold
//         more than 1 value.

// let fruits = ["Apple", "Orange", "Banana"];

// fruits[2] = "Coconut"

// fruits.push("Coconut") // index last position add
// fruits.pop() // Remove last element
// fruits.unshift("Mango") // index 1st position add
// fruits.shift() // Remove 1st element

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("Banana")

// console.log(index);

// for (let i = 0; i < fruits.length; i++) { // list of all items
//   console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i+=2) { // list 2 , 4 , 6 ...
//   console.log(fruits[i]);
// }

// for (let i = 1 ; i < fruits.length; i+=2) { // list 1 , 3 , 5 ...
//   console.log(fruits[i]);
// }

// for (let i = fruits.length - 1; i >= 0; i--) { // list reverse all items
//   console.log(fruits[i]);
// }

//SHORTCUT

// let fruits = ["Apple", "Orange", "Banana"];

// for (let fruit of fruits) { // list of all items
//   console.log(fruit);
// }

// fruits.sort().reverse()
// for (let fruit of fruits) {  //list of all items in reverse
//      console.log(fruit);
//    }

let numbers = [1, 2, 3, 4, 5, 6, 7];
let newNum = numbers.map((num) => num * 2);
console.log(newNum);
