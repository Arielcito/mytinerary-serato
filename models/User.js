const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String , require:true},
  password: { type: String,require:true },
  name: { type: String ,require:true},
  surname: { type: String ,require:true},
  imageURL: { type: String ,require:true},
  country: { type: String , require:true,default:"Argentina"},
  google:{type: Boolean, default:false}
});

const User = mongoose.model("user", userSchema);

module.exports = User;
