const express = require("express");

const app = express();

const PORT = 3000;

// Route for Home Page

app.get("/", (req, res) => {
  res.send("Hello From Express!!!");
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
