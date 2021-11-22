import {Button} from '@mui/material'
import React from "react"
import {makeStyles} from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button:{
        marginRight:"10vw!important",
        color:"white",
        textDecoration:"none",
        
    },
    link:{
        color:"white",
        textDecoration:"none"
    }
}))
const ButtonNav = (param) =>{
    const classes = useStyles()
    return(
    <Link to={`/${param.page}`} className={classes.link}>
        <Button variant="outlined" color="inherit" className={classes.button}>{param.page}</Button>
    </Link>
    )
}

export default ButtonNav