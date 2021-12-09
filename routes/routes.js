const Router = require("express").Router();
const citiesController = require("../controllers/citiesController.js");
const ItinerarysController = require("../controllers/itinerarysController.js");
const UserController = require("../controllers/userController");
const validator = require("../config/validator");
const { getAllCities, postCities, getACity, deleteACity, modifyACity } =
  citiesController;
const {
  getAllItinerarys,
  getAItinerary,
  postItinerary,
  deleteAItinerary,
  modifyAItinerary,
} = ItinerarysController;
const { newUser, logInUser } = UserController;

Router.route("/cities").get(getAllCities).post(postCities);

Router.route("/cities/:id").get(getACity).delete(deleteACity).put(modifyACity);

Router.route("/itineraries").get(getAllItinerarys).post(postItinerary);

Router.route("/itineraries/:id")
  .get(getAItinerary)
  .delete(deleteAItinerary)
  .put(modifyAItinerary);

Router.route("/auth/signup").post(validator, newUser);

Router.route("/auth/signin").post(logInUser)

module.exports = Router;
