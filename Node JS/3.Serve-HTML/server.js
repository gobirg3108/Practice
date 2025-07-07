const http = require("http"); // for creating the server
const fs = require("fs"); // for reading files
const path = require("path"); // for handling file paths

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html"); // Get full path to index.html

  // Read index.html file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500); // If error, send 500 status
      res.end("Error loading the page.");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" }); // Set response type to HTML
      res.end(content); // Send the HTML file content to browser
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
