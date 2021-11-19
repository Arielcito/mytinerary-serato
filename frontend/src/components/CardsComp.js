import React from 'react'
import CardComp from "./CardComp"
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
        <Grid container className={classes.container}>    
            
            {
                item.map((photo,index) =>{
                    return  <CardComp photo={photo} key={index} />

                })
            }  
            
        </Grid>
    )
}

export default CardsComp