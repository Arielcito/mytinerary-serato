const Router = require("express").Router();
const citiesController = require("../controllers/citiesController.js");

const { getAllCities, postCities, getACity,deleteACity,modifyACity } = citiesController;

Router.route("/cities")
.get(getAllCities)
.post(postCities);

Router.route("/cities/:id")
.get(getACity)
.delete(deleteACity)
.put(modifyACity)

module.exports = Router;
