// IF STATEMENTS = if a condition is true,execute some code
//                 if not, do something else
//  if () {
//      enter your code  }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    
    resultElement.textContent = `You are too old you can't enter this site`;
    console.log("You are too old you can't enter this site");
  } else if (age == 0) {
    resultElement.textContent = "You can't enter. you were just born";
    console.log("You can't enter. you were just born");
  } else if (age >= 18) {
    resultElement.textContent = "You are allowed this site";
    console.log("You are allowed this site");
  } else if (age < 0) {
    resultElement.textContent = `You can't be below zero`;
    console.log("You can't be below zero");
  } else {
    resultElement.textContent = "You must be 18+ to enter this site";
    console.log("You must be 18+ to enter this site");
  }
};
