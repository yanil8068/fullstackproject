const express = require("express");
const app = express();
// require
const mongoose = require("mongoose");

// connecting function for local mongodb
async function main() {
  await mongoose.connect("mongodb://localhost:27017/project");
}

// calling
main()
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error", e);
  });

// user schema for db
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// creating model
const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("home route working");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
