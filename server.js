
const cities = [
	{
		title: 'Paris',
		src: 'paris.jpg'
	  }, {
		title: 'Rome',
		src: 'rome.jpg'
	  }, {
		title: 'Istanbul',
		src: 'istanbul.jpg'
	  }, {
		title: 'London',
		src: 'london.jpg'
	  }, {
		title: 'Sidney',
		src: 'sidney.jpg'
	  }, {
		title: 'Berlin',
		src: 'berlin.jpg'
	  }, {
		title: 'Toulouse',
		src: 'toulouse.jpg'
	  }, {
		title: 'San Sebastian',
		src: 'sansebastian.jpg'
	  }, {
		title: 'Barcelona',
		src: 'barcelona.jpg'
	  }, {
		title: 'Ibiza',
		src: 'ibiza.jpg'
	  }, {
		title: 'Milan',
		src: 'milan.jpeg'
	  }, {
		title: 'Bilbao',
		src: 'bilbao.jpg'
	  },
]
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.get("/api/cities",(req,res) => {
    console.log("me llego un get")
    res.json({response:cities})
})

app.listen(4000, () => {
    console.log("server is listening on port 4000")
})