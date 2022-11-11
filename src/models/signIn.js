const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const addUser = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 4,
    maxlength: 20,
  },
  uname: {
    type: String,
    required: true,
    minlength: 4,
  },
  addre: {
    type: String,
    required: true,
  },
  num: {
    type: Number,
    required: true,
    minlength: 10,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email-id is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Wrong format of email id");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  rep_password: {
    type: String,
    required: true,
  },
});

addUser.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.rep_password = undefined;
  }
  next();
});

const newUser = mongoose.model("addUsers", addUser);
module.exports = newUser;
