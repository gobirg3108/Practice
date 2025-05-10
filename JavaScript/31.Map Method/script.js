// .map() = accepts a callback and applies that function
//          to each element of an array, then return new array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let squares = numbers.map(square);
// let cubes = numbers.map(cube);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// let students = ["Gobi", "Mahe", "Ajay", "Rishi"];

// let studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//   return element.toUpperCase();    // Same for lowerCase
// }

let dates = ["2002-08-31", "2004-06-07"];

function formatDates(element) {
  let parts = element.split("-");
  return `${parts[0]}/${parts[1]}/${parts[2]}}`;
}

let formattedDates = dates.map(formatDates);

console.log(formattedDates);
