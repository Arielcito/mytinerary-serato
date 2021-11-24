import React from 'react';
import {Box, Container,Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import CardsComp from './CardsComp'
import Carousel from 'react-elastic-carousel'
import '../styles/Carousel.css'
import ExploreIcon from '@mui/icons-material/Explore';
import Steps from './steps';
import MapIcon from '@mui/icons-material/Map'


const useStyles = makeStyles((theme) =>({
	titulo:{
		display:"flex",
		justifyContent:"center",
		marginTop:"5rem",
		marginBottom:"3rem",
		color:"white",
		fontFamily:'Shippori Antique'
	},
	containter:{
		width:"100%",
	},
	main:{
        background:"#1e2326",
    }

}))
//array de imagenes
const imageArray = [
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
	  }
]
const CarouselComp = () => {
	const classes = useStyles()

	return (
		<Box className={classes.main} id="main">
			<Container className={classes.containerCarousel}>
                <Typography variant="h4" className={classes.titulo} >
				<ExploreIcon  sx={{fontSize:30}} />Start Your Journey
                </Typography>
				<Steps></Steps>
            </Container>
			<Box className={classes.containter}>
				<Typography variant="h4" className={classes.titulo}><MapIcon sx={{fontSize:30}}/>Popular trips</Typography>
				<Carousel disableArrowsOnEnd={false} enableAutoPlay={true} autoPlaySpeed={10000} infinite>
					{
					arrayCarousel.map((image, index) => {
						return <CardsComp item={image} key={index} />
					})
					}
				</Carousel>
			</Box>
		</Box>
	  )
}
//funcion que recibe un array y devuelve un array de arrays con la cantidad de elementos n
function splitArray(array,n){
	let length = array.length
	let i=0
	let auxArray = []
	while(i<length) {
		auxArray.push(array.slice(i,i += n))
	}
	return auxArray	
}
let arrayCarousel = splitArray(imageArray,4)

export default CarouselComp