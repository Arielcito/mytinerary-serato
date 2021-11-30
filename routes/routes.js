const Router = require("express").Router();
const citiesController = require("../controllers/citiesController.js");
const ItinerarysController = require("../controllers/itinerarysController.js");
const { getAllCities, postCities, getACity, deleteACity, modifyACity } =
  citiesController;
const {
    getAllItinerarys,
  getAItinerary,
  postItinerary,
  deleteAItinerary,
  modifyAItinerary,
} = ItinerarysController;

Router.route("/cities").get(getAllCities).post(postCities);

Router.route("/cities/:id").get(getACity).delete(deleteACity).put(modifyACity);

Router.route("/itinerarys").get(getAllItinerarys).post(postItinerary);

Router.route("/itinerary/:id")
  .get(getAItinerary)
  .delete(deleteAItinerary)
  .put(modifyAItinerary);

module.exports = Router;
