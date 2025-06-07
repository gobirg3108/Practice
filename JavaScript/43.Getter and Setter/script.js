// getter = Special method that makes a property readable
// setter = Special method that makes a property writeable

// validate and modify a value when reading/writing a property

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width Must be Positive Number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height Must be Positive Number");
//     }
//   }

//   get width() {
//     return this._width.toFixed(1);
//   }
//   get height() {
//     return this._height.toFixed(1);
//   }

//   get area() {
//     return (this._width * this._height).toFixed(1);
//   }
// }

// const rectangle = new Rectangle(3, 3);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name Must be Enter a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name Must be Enter a non-empty string");
    }
  }
  set age(NewAge) {
    if (typeof NewAge === "number" && NewAge >= 0) {
      this._age = NewAge;
    } else {
      console.error("Age Must Be a Non-Negative number");
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullNameAge() {
    return `My name full name is ${this._firstName} ${this._lastName} and my age is ${this._age}`;
  }
}

const person = new Person("Gobi", "RG", 22);

console.log(person);

console.log(person.fullNameAge);
