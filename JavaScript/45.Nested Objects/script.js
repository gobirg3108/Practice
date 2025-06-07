// nested objects = Objects inside of other Objects.
//                  Allow you to represent more complex data structures
//                  Child Object is enclosed by a parent Object

//                  Person{Address},ContactInfo{}
//                  ShoppingCart{Keyboard{},Mouse{},Monitor{}}
// const person = {
//   name: "GobiRG",
//   age: 22,
//   isStudent: true,
//   hobbies: ["Gamer", "Fighter", "Cooking"],
//   address: {
//     street: "1,abcd street",
//     city: "Chennai",
//     country: "india",
//   },
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[1]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Gobi RG", 22, "1,abcd street", "chennai", "india");
const person2 = new Person("ranjith", 24, "1,abcd street", "mumbai", "india");
const person3 = new Person("chandhu", 12, "1,abcd street", "trichy", "india");
const person4 = new Person("sanjana", 11, "1,abcd street", "goa", "india");

console.log(person1.name);
console.log(person1.address.street);

console.log(person2.name);
console.log(person2.address.country);

console.log(person3.age);
console.log(person3.name);
console.log(person3.address.street);

console.log(person4.address.country);
