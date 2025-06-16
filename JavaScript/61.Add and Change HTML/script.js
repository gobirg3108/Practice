//---------------- EXAMPLE 1 <h1>  -----------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");
// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1); // Last
// document.body.prepend(newH1); // First
// document.getElementById("box1").append(newH1); // inside box1 last element
// document.getElementById("box1").prepend(newH1); // inside box1 first element

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// REMOVE HTML ELEMENTS

// document.getElementById("box1").removeChild(newH1);

// STEP 1
const newListItem = document.createElement("li");
//STEP 2
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "green";
//STEP 3
document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange); // its also work with querySelectorAll(#fruits li)
