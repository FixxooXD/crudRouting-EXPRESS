// const mongoose = require("mongoose");
require('dotenv').config();

// MongoDB LINK
const db_link = process.env.DB_link;
// console.log(db_link)
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose
.connect(db_link)
.then((db) => {
  console.log("db connected");
})
// MongoDB

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate:function(){
        // return emailValidator.validate(this.email)
    // }
  },
  password: {
    type: String,
    required: true,
    minLength:8
  },
  confirmPassword: {
    type: String,
    required: true,
    minLength:8,
    validate:function(){
      return this.confirmPassword == this.password
    }
  },
});

// removing confirmPassword before saving it into the database
userSchema.pre('save',function(){
    this.confirmPassword = undefined;
})

// model
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
