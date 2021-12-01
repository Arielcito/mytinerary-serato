const mongoose = require("mongoose");
const { Schema } = mongoose;

const itinerarySchema = new Schema({
  title: { type: String, required: true },
  hashtags: { type: Number,required: true },
  src: { type: String, required: true },
  duration: { type: Number,required: true },
  price: { type: Number,required: true },
  currency: { type: String },
  language: { type: String },
  user: {type:String,required: true},
  userAvatar: {type:String,required: true}
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
