// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               help with code reusability

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "Fish";
  alive = false;
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "Hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);

fish.swim();
fish.sleep();

hawk.fly();
hawk.eat();
