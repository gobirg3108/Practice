// DOM Navigation = The process of navigating through the structures
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// .firstElementChild

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "green";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "gold";
// });

// .lastElementChild

// const element = document.getElementById("deserts");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "grey";

// const ulLastElements = document.querySelectorAll("ul");
// ulLastElements.forEach((ulLastElement) => {
//   const lastChild = ulLastElement.lastElementChild;
//   lastChild.style.backgroundColor = "brown";
// });

//.nextElementSibling

// const element = document.getElementById("fruits"); // u can use apple the output was orange (nxtElement)
// const nxtEleSib = element.nextElementSibling;
// nxtEleSib.style.backgroundColor = "blue";

//.previousElementSibling

// const element = document.getElementById("deserts");
// const preElementSib = element.previousElementSibling;
// preElementSib.style.backgroundColor = "pink";

//.parentElement

// const element = document.getElementById("cake");
// parent = element.parentElement;
// parent.style.backgroundColor = "lightblue";

//.children

const element = document.getElementById("deserts");
const children = element.children;

// children[2].style.backgroundColor = "red";

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "gold";
});
