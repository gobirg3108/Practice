// spread operator = ... allow an iterable such as an
//                   array or string to be expanded 
//                   into separate elements
//                   (unpack th elements)

// let numbers = [1,2,3,4,5]

// let maximum = Math.max(...numbers)

// let minimum  =Math.min(...numbers)

// console.log(minimum);

// let userName = "Gobinath R"

// let letters = [...userName].join("-")

// console.log(letters);


let fruits = ["apple","orange","banana"]
let vegetables = ["tomato","onion","potato"]
let newFruits = [...fruits,...vegetables,"eggs","milk"]
console.log(newFruits);
