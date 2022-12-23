const express = require("express");
const app = express();
const path = require("path");
// const port = process.env.PORT || 3000;
const port = 3000;
const userModel = require("./models/signupModel");
var bodyParser = require('body-parser');
const { model } = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}))

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

app.post("/signup", function(req, res){
  let newObj = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  });
  newObj.save();
res.redirect('/response')
})

// SignUp Response
app.get("/response", function(req, res){
  res.sendFile(path.join(__dirname, "public/views/submitResponse.html"))
})

// app.get("/user",userRouter)

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is listening at port 3000");
  }
});
