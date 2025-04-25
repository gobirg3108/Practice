// While Loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "gobi" && password === "gobi123") {
    loggedIn = true;
    console.log("You are logged in");
  } else {
    console.log("Invalid Credential ! Please try again");
  }
}
