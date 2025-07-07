// What is fs?
// fs stands for File System — a built-in Node.js module that allows you to:

// * Read files *Write to files *Append content *Delete files

//  Example 1: Writing a File

const fs = require("fs");

fs.writeFile("note.txt", "This is a new file created by Node.js.", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});

// Example 2: Appending to a File

fs.appendFile("note.txt", "\nThis line is added later.", (err) => {
  if (err) throw err;
  console.log("Line added!");
});
