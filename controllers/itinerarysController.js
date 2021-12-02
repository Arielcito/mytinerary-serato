const Itinerary = require("../models/Itinerary.js");

const ItinerarysController = {
  getAllItinerarys: async (req, res) => {
    let itinerarys;
    let error = null;
    try {
      itinerarys = await Itinerary.find().populate('city')
    } catch (error) {
      error = error;
      console.error(error);
    }
    res.json({
      response: error ? "ERROR" : itinerarys,
      success: error ? false : true,
      error: error,
    });
  },
  getAItinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOne({ _id: id }).populate('city')
    } catch (error) {
      console.error(error);
    }
    res.json({
      response: itinerary,
      success: true,
    });
  },
  postItinerary: async (req, res) => {
    const { title, src, hashtags, price, duration, currency, language, user, userAvatar ,city} =
      req.body;
    let itinerary;
    try {
      itinerary = await new Itinerary({
        title,
        src,
        hashtags,
        price,
        duration,
        currency,
        language,
        user,
        userAvatar,
        city
      }).save();
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: itinerary,
      success: true,
    });
  },
  deleteAItinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOneAndDelete({ _id: id });
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: itinerary,
      success: true,
    });
  },
  modifyAItinerary: async (req, res) => {
    let id = req.params.id;
    let itinerary = req.body;
    let update;
    try {
      update = await Itinerary.findOneAndUpdate({ _id: id }, { ...itinerary });
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: itinerary,
      success: true,
    });
  },
};

module.exports = ItinerarysController;
