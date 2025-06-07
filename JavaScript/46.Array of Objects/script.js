const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

// console.log(fruits[2].name);
// console.log(fruits[3].calories);
// console.log(fruits[4].color);

//Push Method

// fruits.push({ name: "mango", color: "yellow", calories: "120" });
// console.log(fruits[5]);

// Pop Method

// fruits.pop() // Remove the last element
// console.log(fruits);

// Splice Method

// fruits.splice(1, 2);
// console.log(fruits);

// forEach()

// fruits.forEach((fruit) => console.log(fruit.name));
// fruits.forEach((fruit) => console.log(fruit.calories));
// fruits.forEach((fruit) => console.log(fruit.color));

// Map

// const fruitNames = fruits.map((fruit) => fruit.name);
// console.log(fruitNames);

// Filter

// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// console.log(yellowFruits);

// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// console.log(lowCalFruits);

// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
// console.log(highCalFruits);

// Reduce (this method return give single value )

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

console.log(minFruit);
