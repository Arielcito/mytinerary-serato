import React, { useState } from 'react';
import {Box} from '@mui/material'
import Cards from './Cards'
import Carousel from 'react-elastic-carousel'

const CarouselComp = () => {
	
	const [imageArray, setImageArray] = useState([[
		{
			title: 'Paris',
			src: '../assets/carousel/paris.jpg'
		  }, {
			title: 'Rome',
			src: '../assets/carousel/rome.jpg'
		  }, {
			title: 'Istanbul',
			src: '../assets/carousel/istanbul.jpg'
		  }, {
			title: 'London',
			src: '../assets/carousel/london.jpg'
		  }], [{
			title: 'Sidney',
			src: '../assets/carousel/sidney.jpg'
		  }, {
			title: 'Berlin',
			src: '../assets/carousel/berlin.jpg'
		  }, {
			title: 'Toulouse',
			src: '../assets/carousel/toulouse.jpg'
		  }, {
			title: 'San Sebastian',
			src: '../assets/carousel/sansebastian.jpg'
		  }], [{
			title: 'Barcelona',
			src: '../assets/carousel/barcelona.jpg'
		  }, {
			title: 'Ibiza',
			src: '../assets/carousel/ibiza.jpg'
		  }, {
			title: 'Milan',
			src: '../assets/carousel/milan.jpeg'
		  }, {
			title: 'Bilbao',
			src: '../assets/carousel/bilbao.jpg'
		  }
	]])
  
	return (
		<Box>
		  <h2 >Popular trips</h2>
		  <Carousel disableArrowsOnEnd={false}>
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