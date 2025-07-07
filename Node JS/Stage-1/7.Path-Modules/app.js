// What is path?

// The path module helps you work with file and folder paths in a safe way. It supports both Windows (\) and Linux (/) formats.

// Example 1: path.join()

const path = require("path");

const finalPath = path.join(__dirname, "public", "index.html");
console.log(finalPath);

// Example 2: path.basename() and path.extname()

const filePath = "/folder/image.png";

console.log(path.basename(filePath)); // image.png
console.log(path.extname(filePath)); // .png

// Uses:

// "folder/file.html" may break in Windows vs Linux

// path.join(...) gives you OS-safe paths
