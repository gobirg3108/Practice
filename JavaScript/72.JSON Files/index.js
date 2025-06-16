// JSON = (javaScript object notation) data-interchange format
//        Used for exchanging data between a server add a web application
//        JSON Files {key:value} OR [{},{},{}]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.

// const names = `["Gobi", "Chandru", "Sanjana"]`;
// const person = `{"name": "Gobi", "age": 22, "isEmployed": true, "hobbies": ["Karate", "Cooking"]}`;
// const people = `[
//   { "name": "Gobi", "age": 22, "isEmployed": true },
//   { "name": "Ajay", "age": 24, "isEmployed": false },
//   { "name": "Rishi", "age": 25, "isEmployed": false },
//   { "name": "Mahe", "age": 23, "isEmployed": true },
//   { "name": "Subash", "age": 23, "isEmployed": true }
// ]`;

// const personData = JSON.parse(people);
// console.log(personData);

fetch("people.json")
  .then((response) => response.json())
  .then((value) => value.forEach((value) => console.log(value.name)));
