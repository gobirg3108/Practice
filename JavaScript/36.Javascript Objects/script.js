// Object = A collection of related properties and/or methods
//          Can represent real world objects (people,products,places)

//          object ={ key:value,
//                    function() }

const person1 = {
  name: "Gobi",
  work: "FSD",
  age: 22,
  isEmployed: false,
  sayHello: function () {
    console.log(`Hii Everyone !`);
  },
  eat: function () {
    console.log(`I am eating biriyani`);
  },
};

const person2 = {
  name: "Mani",
  work: "FSD",
  age: 33,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hii Everyone am mani`);
  },
  eat: function () {
    console.log(`i am eating chicken`);
  },
};

console.log(`Hi I am ${person1.name} and my age is ${person1.age}`);

person1.sayHello();

person1.eat();

console.log(`Hi I am ${person2.name} and my age is ${person2.age}`);

person2.sayHello();

person2.eat();
