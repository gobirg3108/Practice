//  What is Express?
// Express is a web framework for Node.js that makes it easier to:

// Create servers
// Handle routes
// Manage middleware
// Build REST APIs

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
