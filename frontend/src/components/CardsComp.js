import React from 'react'
import CardComp from "./CardComp"
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        justifyContent:"center"
    }
}))
const CardsComp = ({item}) => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>    
        <Grid container>
            {
                item.map((photo,index) =>{
                    return  <CardComp photo={photo} key={index} />

                })
            }  
        </Grid>º
        </Box>
    )
}

export default CardsComp