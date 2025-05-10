// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        personalbar.name = this.name

const person1 = {
  name: "Gobi",
  favFood: "Biriyani",
  sayHello: function () {
    console.log(`Hii ! am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

const person2 = {
  name: "Mani",
  favFood: "Hamburger",
  sayHello: function () {
    console.log(`Hii I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
