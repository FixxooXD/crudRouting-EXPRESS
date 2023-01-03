const express = require("express");
const app = express();
const path = require("path");
// const port = process.env.PORT || 3000;
const port = 3000;
const userModel = require("./models/signupModel");
var bodyParser = require("body-parser");
const { model } = require("mongoose");
require("dotenv").config();
const mongoose = require("mongoose");

// const db_link = process.env.DB_link;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.db_link, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// home route
app.get("/", function (req, res) {
  res.sendFile("public/views/index.html", { root: __dirname });
});

// signup route middleware for info check
app.get("/signup", function (req, res, next) {
  console.log(req.url);
  next();
});

// signUp Form
app.get("/signup", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "public/views/signUpForm.html"));
});

// signup post req
app.post("/signup", function (req, res) {
  // obj contains data as per the model
  let newObj = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  // data is saved in the db
  newObj.save();
  res.redirect("/response");
});

// SignUp Response
app.get("/response", function (req, res) {
  res.sendFile(path.join(__dirname, "public/views/submitResponse.html"));
});

//Connect to the database before listening
connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});
