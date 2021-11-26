// const cities = [
// 	{
// 		title: 'Paris',
// 		src: 'paris.jpg',
// 		country:'France'
// 	  }, {
// 		title: 'Rome',
// 		src: 'rome.jpg',
// 		country:'Italy'
// 	  }, {
// 		title: 'Istanbul',
// 		src: 'istanbul.jpg',
// 		country:'Turkey'
// 	  }, {
// 		title: 'London',
// 		src: 'london.jpg',
// 		country:'England'
// 	  }, {
// 		title: 'Sidney',
// 		src: 'sidney.jpg',
// 		country:'Autralia'
// 	  }, {
// 		title: 'Berlin',
// 		src: 'berlin.jpg',
// 		country:'Germany'
// 	  }, {
// 		title: 'Toulouse',
// 		src: 'toulouse.jpg',
// 		country:'France'
// 	  }, {
// 		title: 'San Sebastian',
// 		src: 'sansebastian.jpg',
// 		country:'Spain'
// 	  }, {
// 		title: 'Barcelona',
// 		src: 'barcelona.jpg',
// 		country:'Spain'
// 	  }, {
// 		title: 'Ibiza',
// 		src: 'ibiza.jpg',
// 		country:'Spain'
// 	  }, {
// 		title: 'Milan',
// 		src: 'milan.jpeg',
// 		country:'Italy'
// 	  }, {
// 		title: 'Bilbao',
// 		src: 'bilbao.jpg',
// 		country:'Spain'
// 	  },{
// 		  title: 'Buenos Aires',
// 		  src:'buenosaires.jpg',
// 		  country:'Argentina'
// 	  },{
// 		  title: 'Macchu Picchu',
// 		  src:'macchupicchu.jpg',
// 		  country:'Peru'
// 	  },{
// 		  title: 'Iguazu Waterfalls',
// 		  src: 'iguazuwaterfalls.jpg',
// 		  country:'Brazil'
// 	  }
// ]
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
      respuesta: error ? "ERROR" : cities,
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
