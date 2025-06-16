// NodeList = Static collection of HTML elements by (id,class,element)
//            Can be created by using querySelectorAll ()
//            Similar to an array ,but no (map,filter,reduce)
//            Nodelist won't update automatically reflect changes

let buttons = document.querySelectorAll(".myBtn");

// Add HTML&CSS Properties

// buttons.forEach((buttons) => {
//   buttons.style.backgroundColor = "green";
//   buttons.textContent += "👌";
// });

// Click eventListener

// buttons.forEach((buttons) => {
//   buttons.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// MOUSEOVER + MOUSEOUT eventListener

// buttons.forEach((buttons) => {
//   buttons.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "green";
//   });
// });

// buttons.forEach((buttons) => {
//   buttons.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "aquamarine";
//   });
// });

// Add an element

// const newBtn = document.createElement("button"); // step 1
// newBtn.textContent = "Button6"; // step 2
// newBtn.classList = "myBtn";
// //step 3
// document.body.appendChild(newBtn);

// buttons = document.querySelectorAll(".myBtn");

// console.log(buttons);

// Remove an element

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myBtn");
    console.log(buttons);
  });
});
