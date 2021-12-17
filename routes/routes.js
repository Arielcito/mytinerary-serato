const Router = require("express").Router();
const citiesController = require("../controllers/citiesController.js");
const ItinerarysController = require("../controllers/itinerarysController.js");
const UserController = require("../controllers/userController");
const validator = require("../config/validator");
const passport = require('../config/passport')
const activitiesController = require('../controllers/activitiesController')
const { getAllCities, postCities, getACity, deleteACity, modifyACity } =
  citiesController;
const {
  getAllItinerarys,
  getAItinerary,
  postItinerary,
  deleteAItinerary,
  modifyAItinerary,
  postLikes,
  postACommentary,
  getCommentaries,
  editCommentary,
  deleteCommentary
} = ItinerarysController;
const { newUser, logInUser,getToken } = UserController;
const { getAllActivities, getAnActivity, postAnActivity, deleteAnActivity, modifyAnActivity} = activitiesController
Router.route("/cities").get(getAllCities).post(postCities);

Router.route("/cities/:id").get(getACity).delete(deleteACity).put(modifyACity);

Router.route("/itineraries").get(getAllItinerarys).post(postItinerary);

Router.route("/itineraries/:id")
  .get(getAItinerary)
  .delete(deleteAItinerary)
  .put(modifyAItinerary);

Router.route("/auth/signup").post(validator, newUser);

Router.route("/auth/signin").post(logInUser).get(passport.authenticate('jwt',{session:false}),getToken)

Router.route("/like/:id")
.put(postLikes)
Router.route("/comments/:id")
.get(getCommentaries)
.post(passport.authenticate('jwt',{session: false}),postACommentary)
.put(passport.authenticate('jwt',{session:false}),editCommentary)
.delete(passport.authenticate('jwt',{session:false}),deleteCommentary)

Router.route('/activities')
.get(getAllActivities)
.post(postAnActivity)
Router.route('/activities/:id')
.delete(deleteAnActivity)
.put(modifyAnActivity)

module.exports = Router;
