import { Container,Box,Grid} from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'
import Favicon from '../assets/favicon.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
//estilado del footer
const useStyles = makeStyles((theme) =>({
    footer:{
        background:"#000000f2",
        minHeight:"170px",
        position:"relative",
        padding:"30px",
        width:"100vw",
        color:"#fff!important",
        display:"flex",
        textDecoration:"none!important",
        marginTop:"5rem"
    },
    logo:{
        maxWidth:"100px",
        maxHeight:"100px",
        
    },
    mediaIcon:{
        padding:"1rem",
        marginLeft:"1rem",
        border:"1px solid #fff",
        borderRadius:"100%",
        
    },
    logoFooter:{
        display:"flex",
        alignItems:"center",
    },
    logoStyle:{
        width:"7rem",
        height:"7rem", 
    },
    nav:{
        borderBottom:"1px solid #252525",
        marginBottom:"1rem"
    }
}))
//creacion del componente footer
const Footer = () =>{
    const classes = useStyles()
    return(
        <Box className={classes.footer} >
            <Container >
                <Grid container spacing={1} id="footer">
                    <Grid item sm={4} xs={12}>
                    <Link to={`/Home`} >
                        <Box display="flex" alignItems="center" id="navLogo">
                            <img src={Favicon} alt="Logo" className={classes.logoStyle} />
                            <h1 overflow="hidden" id="navTitle" >
                                MyTinerary
                            </h1>
                        </Box>
                    </Link>
                    </Grid>
                    <Grid item sm={4}>
                        <Box className={classes.nav} >Navigation</Box>
                        <Box sx={{marginBottom:"1rem"}}>
                            <Link to={`/Home`} color="#fff" underline="none" >
                                Home
                            </Link>
                        </Box>
                        <Box sx={{marginBottom:"1rem"}}>
                            <Link to={`/Cities`} color="rgba(255,255,255,.7)" underline="none" >
                                Cities
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sm={4} id="mediasCostado">
                        <a href="facebook.com.ar" target="_blank" className={classes.medias}>
                        <FacebookIcon className={classes.mediaIcon}/>
                        </a>
                        <a href="instagram.com.ar" target="_blank" className={classes.medias}>
                        <InstagramIcon className={classes.mediaIcon}/>
                        </a>
                        <a href="twitter.com.ar" target="_blank" className={classes.medias}> 
                        <TwitterIcon className={classes.mediaIcon}/>
                        </a>
                        <a href="youtube.com.ar" target="_blank" className={classes.medias}>
                        <YouTubeIcon className={classes.mediaIcon}/>
                        </a>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item id="mediasAbajo" display="none">
                        <a href="facebook.com.ar" target="_blank" className={classes.medias}>
                        <FacebookIcon className={classes.mediaIcon}/>
                        </a>
                        <a href="instagram.com.ar" target="_blank" className={classes.medias}>
                        <InstagramIcon className={classes.mediaIcon}/>
                        </a>
                        <a href="twitter.com.ar" target="_blank" className={classes.medias}> 
                        <TwitterIcon className={classes.mediaIcon}/>
                        </a>
                        <a href="youtube.com.ar" target="_blank" className={classes.medias}>
                        <YouTubeIcon className={classes.mediaIcon}/>
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign="center">
                            <p >&copy;2021 MyTinerary-All rights reserve</p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}   

export default Footer