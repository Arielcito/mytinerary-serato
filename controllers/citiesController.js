const cities = [
	{
		title: 'Paris',
		src: 'paris.jpg',
		country:'France'
	  }, {
		title: 'Rome',
		src: 'rome.jpg',
		country:'Italy'
	  }, {
		title: 'Istanbul',
		src: 'istanbul.jpg',
		country:'Turkey'
	  }, {
		title: 'London',
		src: 'london.jpg',
		country:'England'
	  }, {
		title: 'Sidney',
		src: 'sidney.jpg',
		country:'Autralia'
	  }, {
		title: 'Berlin',
		src: 'berlin.jpg',
		country:'Germany'
	  }, {
		title: 'Toulouse',
		src: 'toulouse.jpg',
		country:'France'
	  }, {
		title: 'San Sebastian',
		src: 'sansebastian.jpg',
		country:'Spain'
	  }, {
		title: 'Barcelona',
		src: 'barcelona.jpg',
		country:'Spain'
	  }, {
		title: 'Ibiza',
		src: 'ibiza.jpg',
		country:'Spain'
	  }, {
		title: 'Milan',
		src: 'milan.jpeg',
		country:'Italy'
	  }, {
		title: 'Bilbao',
		src: 'bilbao.jpg',
		country:'Spain'
	  },{
		  title: 'Buenos Aires',
		  src:'buenosaires.jpg',
		  country:'Argentina'
	  },{
		  title: 'Macchu Picchu',
		  src:'macchupicchu.jpg',
		  country:'Peru'
	  },{
		  title: 'Iguazu Waterfalls',
		  src: 'iguazuwaterfalls.jpg',
		  country:'Brazil'
	  }
]
const citieControllers = {
    getAllCities:(req,res) => {
        res.json({response:cities})
    },
    postCities:(req,res) => {
        cities.push(req.body)
        res.json({response:cities})
    },
    getACity:(req,res) => {
        const id = req.params.id
        const city = cities.find(city => city.title === id)
		console.log(req)
        res.json({response:city})
    }
}

module.exports = citieControllers
