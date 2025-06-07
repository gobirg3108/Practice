// destructuring = extract values from arrays and objects,
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// Ex:1 Swap the value of two variables

// let a = 5;
// let b = 3;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// EX : 2 SWAP 2 ELEMENT IN AN ARRAY

// const color = ["red", "blue", "green", "black", "white"];

// [color[0], color[4]] = [color[4], color[0]];

// console.log(color);

// EX : 3 ASSIGN ARRAY ELEMENTS TO VARIABLES

// const color = ["red", "blue", "green", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = color;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// Ex 4 : EXTRACT VALUES FROM OBJECTS

// const person1 = {
//   firstName: "Gobi",
//   lastName: "RG",
//   age: 22,
//   job: "Fullstack Developer",
// };

// const person2 = {
//   firstName: "Ramalingam",
//   lastName: "Kokila",
//   age: "59",
// };

// const { firstName, lastName, age, job = "Unemployed" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// EX:5 DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({ firstName, lastName, age, study = "school" }) {
  console.log(`Name:${firstName} ${lastName}`);
  console.log(`Age:${age}`);
  console.log(`Study:${study}`);
}

const person1 = {
  firstName: "chnadru",
  lastName: "selvam",
  age: 12,
  study: "7th std",
};

const person2 = {
  firstName: "sanjana",
  lastName: "selvam",
  age: 11,
};
displayPerson(person2); // this is function call method
