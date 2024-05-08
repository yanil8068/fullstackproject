const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("home route working");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
