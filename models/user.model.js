const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
    trim: true,
  },
  job_title: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
