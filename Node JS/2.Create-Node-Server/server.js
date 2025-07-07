const http = require("http"); // core Node.js module

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // HTTP status and headers
  res.end("Welcome to Gobi's Node.js world!");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
