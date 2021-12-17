const mongoose = require("mongoose");
const { Schema } = mongoose;

const itinerarySchema = new Schema({
  title: { type: String, required: true },
  hashtags: [{ type: String, required: true}],
  src: [{ type: String,  required: true}],
  duration: { type: String, required: true},
  price: { type: String,required: true },
  currency: { type: String },
  language: { type: String },
  user: {type:String,required: true},
  userAvatar: {type:String,required: true},
  city: [{ type:mongoose.Types.ObjectId, ref:'city', required: true}],
  comments:[{comment:{type:String, required:true},user:{type:mongoose.Types.ObjectId, ref:'user',required:true}}],
  like:[{user:{ type:mongoose.Types.ObjectId, ref:'user',}}]
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
