// constructor = special method for defining the
//               properties and methods of objects

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = function () {
      console.log(`I am Drive the ${this.make}`);
    });
}

const car1 = new Car("Audi", "RS Q8", 2025, "Black");
const car2 = new Car("Ford", "Mustang", 2025, "Blue");
const car3 = new Car("Lamborghini", "Huracan", 2025, "Green");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();
