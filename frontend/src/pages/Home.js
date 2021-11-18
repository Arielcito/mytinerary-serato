import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import {Box, Container,Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CarouselComp from '../components/CarouselComp'
import '../styles/NavBar.css'

const useStyles = makeStyles((theme) => ({
    main:{
        background:"#1e2326",
    }
}))
const Home = () =>{
        const classes = useStyles()

        return (
            <>
                <NavBar></NavBar>
                <Hero></Hero>
                <Box className={classes.main} id="main">
                    <Container>
                        <Typography variant="h4" textAlign="center" marginTop="2rem" color="#fff">
                                The easiest way to plan your adventures!
                        </Typography>
                        <CarouselComp></CarouselComp>
                    </Container>
                </Box>
                <Footer></Footer>
            </>
            )
    }

export default Home