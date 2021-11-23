import React from 'react'
import { AppBar, Toolbar, Box,Menu,MenuItem,IconButton  } from '@mui/material'
import Logo from '../assets/logo.png'
import ButtonNav from './Button';
import AccountCircle from '@mui/icons-material/AccountCircle'
import '../styles/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@mui/styles'
import { Link,NavLink } from 'react-router-dom';
import { FormControlLabel,Collapse,List,ListItem } from '@mui/material';
//estilado navbar
const useStyles = makeStyles((theme) =>({
    appBar:{
        background: 'rgba(0,0,0,0.25)!important',
        backdropFilter:" blur(2px)!important",
        boxShadow: 'none',
    },
    logoStyle:{
        width:"4rem",
        height:"3rem", 
    },
    link:{
        color:"white",
        textDecoration:"none",
        
    },
    logo:{
        display:"flex",
    }
}))
//componente navbar
const NavBar = () =>{
    const classes = useStyles()
    const [checked, setChecked] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

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
                            <List>
                                <ListItem>
                                    <NavLink to="Home" > Home</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="Cities" >Cities </NavLink>
                                </ListItem>
                            </List>
                        </Collapse>
                    </div>
                    </Box>
                </Box>
                <Link to={`/Home`} className={classes.link}>
                    <Box className={classes.logo} id="navLogo">
                        <img src={Logo} alt="Logo" className={classes.logoStyle} id="logo"/>
                        <h1 overflow="hidden" id="navTitle">
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
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                        <MenuItem sx={{color:"#000"}} onClick={handleClose}>Log in</MenuItem>
                        <MenuItem sx={{color:"#000"}} onClick={handleClose}>Sign up</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar