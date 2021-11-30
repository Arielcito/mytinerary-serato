const mongoose = require("mongoose");
const { Schema } = mongoose;

const itinerarySchema = new Schema({
  title: { type: String, required: true },
  hashtags: { type: Number },
  src: { type: String, required: true },
  duration: { type: Number },
  price: { type: Number },
  currency: { type: String },
  language: { type: String },
  user: {type:String},
  userAvatar: {type:String}
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
