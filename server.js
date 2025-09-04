const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Project 1" });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}

module.exports = app;
