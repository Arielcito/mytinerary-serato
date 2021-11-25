const router = require("express").Router();
const citiesControllers = require("../controllers/citiesController.js");

const { getAllCities, postCities, getACity } = citiesControllers;

router.route("/cities")
.get(getAllCities)
.post(postCities);

router.route("/city/:id")
.get(getACity);
module.exports = router;
