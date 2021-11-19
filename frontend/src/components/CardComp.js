import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import React from "react"
import { Grid } from "@mui/material"

const useStyles = makeStyles((theme) => ({
  container:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    cursor:"pointer",
    
  },
  image:{
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "30vw",
    height: "40vh",
    margin:"1rem 1rem 1rem 1rem"
  },
  titulo:{
    fontSize: "28px",
    lineHeight: "32px",
    position:"relative",
    bottom:"50%",
    color:"#fff",
    
  }
}))
const CardComp =  ({photo}) => {
  const imageSrc = require(`../assets/carousel/${photo.src}`).default
  const classes = useStyles()
  return (
        <Box className={classes.container}>
          <img src={imageSrc} alt={photo.title} className={classes.image}/>
          <h3 className={classes.titulo}>{photo.title}</h3>
        </Box>
  )
}

export default CardComp

/*style={{                
                                      backgroundImage: `url(${photo.src})`, 
                                      backgroundSize: "cover", 
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "50% 50%",
                                      width: "30vw",
                                      height: "40vh"
                                       }}>
 */