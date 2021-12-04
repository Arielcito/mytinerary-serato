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
  comments:[{type:String}]
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
