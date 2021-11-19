import React from 'react';
import {Box} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Cards from './CardsComp'
import Carousel from 'react-elastic-carousel'

const useStyles = makeStyles((theme) =>({
	titulo:{
		display:"flex",
		justifyContent:"center",
		marginTop:"3rem",
		marginBottom:"3rem"
	},
	containter:{
		width:"100%"
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
		<Box >
		  <h2 className={classes.titulo}>Popular trips</h2>
		  <Carousel disableArrowsOnEnd={false} enableAutoPlay={true} className={classes.containter}>
			{
			  imageArray.map((image, index) => {
				console.log(image)
				return <Cards item={image} key={index}/>
			  })
			}
		  </Carousel>
		</Box>
	  )
}

export default CarouselComp