import React from 'react'
import { AppBar, Toolbar, Box,Menu,MenuItem,IconButton  } from '@mui/material'
import Logo from '../assets/logo.png'
import ButtonNav from './Button';
import AccountCircle from '@mui/icons-material/AccountCircle'
import '../styles/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@mui/styles'
import { Link } from 'react-router-dom';
import { FormControlLabel,Collapse } from '@mui/material';

const useStyles = makeStyles((theme) =>({
    appBar:{
        background: 'rgba(0,0,0,0.25)!important',
        backdropFilter:" blur(2px)!important",
        boxShadow: 'none',
    },
    logoStyle:{
        width:"7rem",
        height:"5rem", 
    },
    link:{
        color:"white",
        textDecoration:"none",
        
    },
}))

const NavBar = () =>{
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleChange = () => {
        setChecked((prev) => !prev)
    }

    const stateMenu = checked ? "block" : "none"
    return (
        <div className="App">
            <AppBar className={classes.appBar}>
                <Toolbar sx={{justifyContent:"space-between"}}>
                <Box display="none" id="hamburger">    
                <FormControlLabel
                    control={
                        <Box  >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 ,mt: 5}}
                                onClick={handleChange}
                            >
                            </IconButton>
                        </Box>
                }
                    label={
                        <MenuIcon  />
                    }
                />
                    <Box
                    
                    sx={{
                    '& > :not(style)': {
                    position:"relative",
                    height: 90,
                    width: 100,
                    overflow:"hidden",
                    display:stateMenu
                },
                }}
            >
                <div>
                <Collapse in={checked}>
                            <Box >
                                <ButtonNav page="Home" ></ButtonNav>
                                <ButtonNav page="Cities" ></ButtonNav>
                            </Box>
                </Collapse>
                
                
                </div>
                </Box>
                </Box>
                    <Link to={`/Home`} className={classes.link}>
                    <Box display="flex" alignItems="center" id="navLogo">
                        <img src={Logo} alt="Logo" className={classes.logoStyle} id="logo"/>
                        <h1 fontFamily="italic"  overflow="hidden" id="navTitle">
                            MyTinerary
                        </h1>
                    </Box>
                    </Link>
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