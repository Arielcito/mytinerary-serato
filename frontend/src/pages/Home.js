import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CarouselComp from '../components/CarouselComp'
import '../styles/NavBar.css'

export default class Home extends React.Component {

    render(){
        
        return (
                         <>
                             <NavBar></NavBar>
                             <Hero></Hero>
                             <CarouselComp ></CarouselComp>
                             <Footer></Footer>
                         </>
                         )
    }
}
