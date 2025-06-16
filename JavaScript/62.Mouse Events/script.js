// eventListener = Listen for specific events to create interactive web pages: click,mouseover,mouseout
// .addEventListener(event,useCallback (anonymous or arrow function prefer (arrow)))

const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH 😒";
// });

// myBox.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "pink";
//   event.target.textContent = "Don't do it 🤷‍♂️";
// });

// myBox.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "gold";
//   event.target.textContent = "Click Me 😊";
// });

// its also work with button

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH 😒";
});

myBtn.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "pink";
  myBox.target.textContent = "Don't do it 🤷‍♂️";
});

myBtn.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "gold";
  myBox.textContent = "Click Me 😊";
});
