import { AppBar, Toolbar, Typography,Button, Box } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'
import Logo from '../assets/logo.png'

const useStyles = makeStyles((theme) =>({
    appBar:{
        background: 'rgba(0,0,0,0.5)',
        backdropFilter:" blur(2px)",
        boxShadow: 'none'
    },
    logoStyle:{
        width:"70px",
        height:"50px"
    },
    Button:{
        display:"flex",
        justifyContent: 'center',
        background:"primary"
    }
}))

const ButtonNav = (param) =>{
    const classes = useStyles()

    return(
        <Button variant="outlined" color="inherit" className={classes.Button}>{param.page}</Button>
    )
}
const NavBar = () =>{
    const classes = useStyles()

    return (
        <div className="App">
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img src={Logo} alt="Logo" className={classes.logoStyle}/>
                    <Typography>
                        MyTinerary
                    </Typography>
                    <Box className={classes.Button}>
                        <ButtonNav page="Home" ></ButtonNav>
                        <ButtonNav page="Cities" ></ButtonNav>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar