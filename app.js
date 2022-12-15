const express = require("express");
const app = express();
const path = require("path");
// const dotEnv = require("dotenv");
// const userRouter = require('./routers/userSignup');

app.get("/", function (req, res) {
  res.sendFile("public/views/index.html", { root: __dirname });
});
app.use(express.static("public"));

app.get("/signup", function (req, res) {
  console.log(__dirname);
  //  res.sendFile('views/signUpForm.html', {root:__dirname})
  res.sendFile(path.join(__dirname, "public/views/signUpForm.html"));
});

// app.get("/user",userRouter)

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listening at port 3000");
  }
});
