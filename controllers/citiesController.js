const City = require("../models/City");

const citiesController = {
  getAllCities: async (req, res) => {
    let cities;
    let error = null;
    try {
      cities = await City.find();
    } catch (error) {
      error = error;
      console.error(error);
    }
    res.json({
      response: error ? "ERROR" : cities,
      success: error ? false : true,
      error: error,
    });
  },
  getACity: async (req, res) => {
    let city;
    const id = req.params.id;
    try {
      city = await City.findOne({ _id: id });
    } catch (error) {
      console.error(error);
    }
    res.json({
      response: city,
      success: true,
    });
  },
  postCities: async(req, res) => {
    const { title, src, country } = req.body;
    let city
    try{
      city = await new City({ title, src, country }).save()
    }catch(error){
      console.error(error)
    }
    res.json({
      res: city,
      success: true,
    });
  },
  deleteACity: async (req, res) => {
    let city;
    const id = req.params.id;
    try {
      city = await City.findOneAndDelete({ _id: id });
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: city,
      success: true,
    });
  },
  modifyACity: async (req, res) => {
    let id = req.params.id;
    let city = req.body;
    let update;
    try {
      update = await City.findOneAndUpdate({ _id: id }, { ...city });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = citiesController;
