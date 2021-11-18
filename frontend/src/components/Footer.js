import { Container,Box,Grid,Link} from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'
import Favicon from '../assets/favicon.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles((theme) =>({
    footer:{
        background:"#000000f2",
        minHeight:"170px",
        position:"relative",
        padding:"30px",
        width:"100vw",
        color:"#fff",
        display:"flex"
    },
    logo:{
        maxWidth:"100px",
        maxHeight:"100px"
    },
    mediaIcon:{
        padding:"1rem",
        marginLeft:"1rem",
        border:"1px solid #fff",
        borderRadius:"100%"
    },
    logoFooter:{
        display:"flex",
        alignItems:"center",
    },
    logoStyle:{
        width:"7rem",
        height:"7rem", 
    }
}))

const Footer = () =>{
    const classes = useStyles()
    return(
        <Box className={classes.footer}>
            <Container >
                <Grid container spacing={1}>
                    <Grid item xs={4} >
                    <Box display="flex" alignItems="center" id="navLogo">
                        <img src={Favicon} alt="Logo" className={classes.logoStyle} />
                        <h1 fontFamily="italic"  overflow="hidden" id="footerTitle">
                            MyTinerary
                        </h1>
                    </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box borderBottom={1} borderColor="#252525" sx={{marginBottom:"1rem"}}>Navigation</Box>
                        <Box sx={{marginBottom:"1rem"}}>
                            <Link href="/" color="rgba(255,255,255,.7)" underline="none" >
                                Home
                            </Link>
                        </Box>
                        <Box sx={{marginBottom:"1rem"}}>
                            <Link href="/" color="rgba(255,255,255,.7)" underline="none" >
                                Cities
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} id="mediasCostado">
                        <FacebookIcon className={classes.mediaIcon}/>
                        <InstagramIcon className={classes.mediaIcon}/>
                        <TwitterIcon className={classes.mediaIcon}/>
                        <YouTubeIcon className={classes.mediaIcon}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item id="mediasAbajo" display="none">
                        <FacebookIcon className={classes.mediaIcon}/>
                        <InstagramIcon className={classes.mediaIcon}/>
                        <TwitterIcon className={classes.mediaIcon}/>
                        <YouTubeIcon className={classes.mediaIcon}/>
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