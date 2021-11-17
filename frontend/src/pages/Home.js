import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
class Home extends React.Component{

    render(){
        return (
            <>
                <NavBar></NavBar>
                <Hero></Hero>
            </>
            )
    }
}

export default Home