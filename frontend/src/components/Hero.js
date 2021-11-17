import React from "react"
import {Box} from '@mui/material'
import background from '../assets/background.jpeg'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) =>({
    hero:{
        backgroundImage: `url(${background})`,
        height:"100vh",
        width:"100vw",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        marginLeft: "-.5rem",
        marginTop: "-2rem"
    }
}))

const Hero = () =>{
    const classes = useStyles()

    return(
        <Box className={classes.hero}>
            <Box>aca va el slogan</Box>
        </Box>
    )
}

export default Hero