import React from 'react'
import { AppBar, Toolbar, Box,Menu,MenuItem,IconButton  } from '@mui/material'
import Logo from '../assets/logo.png'
import ButtonNav from './Button';
import AccountCircle from '@mui/icons-material/AccountCircle'
import '../styles/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) =>({
    appBar:{
        background: 'rgba(0,0,0,0.25)!important',
        backdropFilter:" blur(2px)!important",
        boxShadow: 'none',
    },
    logoStyle:{
        width:"7rem",
        height:"5rem", 
    }
}))

const NavBar = () =>{
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="App">
            <AppBar className={classes.appBar}>
                <Toolbar sx={{justifyContent:"space-between"}}>
                    <Box display="none" id="hamburger">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            
                        >
                            <MenuIcon  />
                        </IconButton>
                    </Box>
                    <Box display="flex" alignItems="center" id="navLogo">
                        <img src={Logo} alt="Logo" className={classes.logoStyle} id="logo"/>
                        <h1 fontFamily="italic"  overflow="hidden" id="navTitle">
                            MyTinerary
                        </h1>
                    </Box>
                    <Box id="navButton" display="block">
                        <ButtonNav page="Home" ></ButtonNav>
                        <ButtonNav page="Cities" ></ButtonNav>
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Log in</MenuItem>
                        <MenuItem onClick={handleClose}>Sign up</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar