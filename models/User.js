const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  imageURL: { type: String },
  country: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
