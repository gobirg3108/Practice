// //Request

// const http = require("http");

// // function rqListener(req, res) {  // Normal Function
// //   console.log(req);
// // }

// const server = http.createServer((req, res) => {
//   // Arrow Function
//   console.log(req.method);
//   //   process.exit();  // stop Loop
// });

// server.listen(3000);

// Response

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js</title></head>");
  res.write("<body><h1>Hello From Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
