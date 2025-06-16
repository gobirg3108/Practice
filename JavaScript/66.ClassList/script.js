// classList = Element property in javaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allow to make reuseable classes for many elements
//             across your webpage.

// add ()
// remove()
//toggle(Remove if present, Add if not)
//replace (oldClass,newClass)
//contains

const myButton = document.getElementById("myButton");

// add () & remove()

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

//toggle(Remove if present, Add if not)

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });

//replace (oldClass,newClass)

// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) => {
//   event.target.classList.replace("enabled", "disabled");
// });

// contains

// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) => {

//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😒";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

let buttons = document.querySelectorAll(".myBtn");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "🤦‍♂️";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});
