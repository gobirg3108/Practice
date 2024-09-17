// String Slicing  = creating a substring from a portion
//                   of another String

//                   String.slice(start,end)

// const fullName = "Gobi RG";

// let firstName = fullName.slice(0, 4);
// console.log(firstName);

// let lastName = fullName.slice(5, 7);
// console.log(lastName);

// let firstChar = fullName.slice(0, 1);
// console.log(firstChar);

// let lastChar = fullName.slice(-1);
// console.log(lastChar);

// const fullName = "Gobinath RG";

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);

const email = "gobi31@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);
