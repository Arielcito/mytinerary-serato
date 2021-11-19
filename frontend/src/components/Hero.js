import React from "react"
import {Box,Button,Tooltip} from '@mui/material'
import background from '../assets/background.jpg'
import {makeStyles} from '@mui/styles'
import '../styles/Hero.css'

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
        width:"50%",
            "&:hover":{
                color:"ff7a59",
                border:"1px solid #ff7a59",
                background:"#fff"
        }
    },
    heroTitle:{
        
    }

}))

const Hero = () =>{
    const classes = useStyles()

    return(
        <Box className={classes.hero} id="hero">
            <Box className={classes.p}>
                <h2 id="heroTitle">
                    Discover your next adventure
                </h2>
                <Tooltip title="Go To Cities" enterDelay={500} leaveDelay={200}>
                    <Button variant="contained" size="medium" color="error" className={classes.buttonHero}>Start your trip</Button>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Hero