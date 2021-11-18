import React from "react"
import {Box,Button,Tooltip} from '@mui/material'
import background from '../assets/background.jpg'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) =>({
    hero:{
        backgroundImage: `url(${background})`,
        height:"100vh",
        minWidth:"100vw",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        boxShadow:"none",
        backgroundPositionY:"-5rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    p:{
        fontWeight: 1000,
        fontSize: 70,
        fontStyle: 'italic',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonHero:{
        width:"50%"
    }

}))

const Hero = () =>{
    const classes = useStyles()

    return(
        <Box className={classes.hero} id="hero">
            <Box className={classes.p}>
                <p >
                    Discover your next adventure
                </p>
                <Tooltip title="Go To Cities">
                    <Button variant="contained" size="medium" color="error" className={classes.buttonHero}>Start your trip</Button>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Hero