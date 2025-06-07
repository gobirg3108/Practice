// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic ondragover,not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);

// const numbers = [2, 5, 6, 9, 7, 1, 4, 55, 34, 22, 49];

// numbers.sort((a, b) => b - a); // a-b Ascending Order,b-a descending order
// console.log(numbers);

const people = [
  { name: "Gobi", age: 22, grade: 10.0 },
  { name: "ajay", age: 19, grade: 9.5 },
  { name: "rishi", age: 24, grade: 9.0 },
];
// people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name)); // this is for name // reverse order change to b.name
console.log(people);
