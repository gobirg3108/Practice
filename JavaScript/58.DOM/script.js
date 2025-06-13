// // DOM = DOCUMENT OBJECT MODEL

// Object {} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web browser constructor the dom when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
// change th content , structure,and style of a web pages.

// console.log(document);

// document.title = "My Website";
// document.body.style.backgroundColor = "grey";
// console.dir(document);

const userName = " Gobi ";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? ` Guest ` : userName;
