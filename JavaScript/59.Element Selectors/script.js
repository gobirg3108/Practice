// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1.document.getElementById()          // ELEMENT OR NULL
// 2.document.getElementsClassName()    // HTML COLLECTION
// 3.document.getElementsByTagName()    // HTML COLLECTION
// 4.document.querySelector()           // FIRST ELEMENT OR NULL
// 5.document.querySelectorAll()        // NODE LIST

// 1.document.getElementById()          // ELEMENT OR NULL

const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "green";

myHeading.style.textAlign = "center";

// 2.document.getElementsClassName()    // HTML COLLECTION

// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "red";
// fruits[1].style.backgroundColor = "red";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "pink";
// }

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "yellow";
// });

// 3.document.getElementsByTagName()    // HTML COLLECTION

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("ul");

// h4Elements[1].style.backgroundColor = "orange";

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "gold";
// }

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "lightgreen";
// }

// it also work on  Array.form().forEach(()=>{})

// 4.document.querySelector()           // FIRST ELEMENT OR NULL

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "grey";

// 5.document.querySelectorAll()        // NODE LIST

const fruits = document.querySelectorAll(".fruits");

// fruits[0].style.backgroundColor = "red";

fruits.forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
