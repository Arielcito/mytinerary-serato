import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "30rem",
    height: "40vh",
    margin:"2rem",
    cursor:"pointer"
  },
  titulo:{
    width:"100%",
    fontSize: "28px",
    lineHeight: "32px",
    position:"relative",
    top:"50%",
    color:"#fff",
    background:"rgba(0,0,0,.562)",
    textAlign:"center"
  }
}))
const CardComp =  ({photo}) => {
  const imageSrc = require(`../assets/carousel/${photo.src}`).default
  const classes = useStyles()

  return (
        <Box className={classes.container} id="card" sx={{backgroundImage:`url(${imageSrc})`}}>
          <h3 className={classes.titulo}><LocationOnIcon/>{photo.title}</h3>
        </Box>
  )
}

export default CardComp