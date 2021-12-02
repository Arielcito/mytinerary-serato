const mongoose = require("mongoose");
const { Schema } = mongoose;

const itinerarySchema = new Schema({
  title: { type: String, required: true },
  hashtags: [{ type: String, }],
  src: [{ type: String,  }],
  duration: { type: String, },
  price: { type: String, },
  currency: { type: String },
  language: { type: String },
  user: {type:String,},
  userAvatar: {type:String,},
  city: [{ type:mongoose.Types.ObjectId, ref:'city', required: true}],
  comments:[{type:String}]
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
