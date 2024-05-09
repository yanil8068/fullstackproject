const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/project");
}
main().then(() => {
  console.log("db connected");
});

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

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("home route working");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
