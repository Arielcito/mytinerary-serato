import {Button} from '@mui/material'
import React from "react"
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    button:{
        marginRight:"10rem!important"
    }
}))
const ButtonNav = (param) =>{
    const classes = useStyles()
    return(
        <Button variant="outlined" color="inherit" className={classes.button}>{param.page}</Button>
    )
}

export default ButtonNav