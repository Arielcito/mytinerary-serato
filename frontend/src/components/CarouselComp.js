import React from 'react';
import {Box, Container,Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Cards from './CardsComp'
import Carousel from 'react-elastic-carousel'
import '../styles/Carousel.css'
import ExploreIcon from '@mui/icons-material/Explore';
import Steps from './steps';

const useStyles = makeStyles((theme) =>({
	titulo:{
		display:"flex",
		justifyContent:"center",
		marginTop:"3rem",
		marginBottom:"3rem",
		color:"white"
	},
	containter:{
		width:"100%",
	},
	main:{
        background:"#1e2326",
    }
}))
const CarouselComp = () => {
	const imageArray = [[
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
		  }], [{
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
		  }], [{
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
	]]
	const classes = useStyles()

	return (
		<Box className={classes.main} id="main">
			<Container className={classes.containerCarousel}>
                <Typography variant="h4" textAlign="center" marginTop="2rem" color="#fff">
				<ExploreIcon sx={{width:"30px",height:"30px"}}/>Start Your Journey
                </Typography>
				<Steps></Steps>
            </Container>
			<Box className={classes.containter}>
				<Typography variant="h4" className={classes.titulo}>Popular trips</Typography>
				<Carousel disableArrowsOnEnd={false} enableAutoPlay={true} autoPlaySpeed={10000} infinite>
					{
					imageArray.map((image, index) => {
						return <Cards item={image} key={index}/>
					})
					}
				</Carousel>
			</Box>
		</Box>
	  )
}

export default CarouselComp