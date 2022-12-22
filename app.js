const express = require("express");
const app = express();
const path = require("path");
// const dotEnv = require("dotenv");
// const userRouter = require('./routers/userSignup');
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile("public/views/index.html", { root: __dirname });
});

app.use('/signup',function(req, res, next){
    console.log(req.url);
    next();
})

// signUp Form
app.get("/signup", function (req, res) {
  console.log(__dirname);
  //  res.sendFile('views/signUpForm.html', {root:__dirname})
  res.sendFile(path.join(__dirname, "public/views/signUpForm.html"));
});

// SignUp Response
app.get("/response", function(req, res){
  res.sendFile(path.join(__dirname, "public/views/submitResponse.html"))
})

// app.get("/user",userRouter)

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listening at port 3000");
  }
});
