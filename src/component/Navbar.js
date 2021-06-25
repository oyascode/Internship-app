import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import logo from '../assets/images/logo.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from "react-router-dom"
import { Box, Button } from '@material-ui/core';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "3",
  },
  navWrap: {
    width: "85%",
    maxWidth: "1300px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#128E5A",
  },
  logo: {
    [theme.breakpoints.down("sm")]:{
      flexGrow: 1,
    }
  },
  appBar: {
    backgroundColor: "#fff",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  mobileMenu: {
    position: "relative",
    top: "150px",
    left: "0"
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  },
  menuLink: {
    textDecoration: "none",
    padding: theme.spacing(3),
    color: "#128E5A",
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      padding: theme.spacing(2),
    }
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "0",
    paddingRight: "0",
  },

  linkBtn: {
    border: "1px solid #1F28CF",
    borderRadius: "15px",
    fontSize: "0.9rem",
    textTransform: "capitalize",
    color: "#1F28CF",
    marginTop: "-7px"
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.navWrap}>
        <AppBar position="static" className={classes.appBar} elevation={0}>
          <Toolbar className={classes.toolBar}>
            <Box className={classes.logo}>
            <img style={{width: "130px"}} src={logo} alt="logo" />
            </Box>
            <Box>
              {isMobile ? (
              <Box>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                  <MenuIcon />
                </IconButton>
                <Box className={classes.mobileMenu}>
                  <Menu
                    
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                    >
                    <Box className={classes.menuItems}>
                      <Link className={classes.menuLink} to="/" onClick={handleClose}>Home</Link>
                      <Link className={classes.menuLink} to="/About" onClick={handleClose}>About</Link>
                      <Link className={classes.menuLink} to="/HowItWorks" onClick={handleClose}>How it Works</Link>
                      <Link className={classes.menuLink} to="/Faq" onClick={handleClose}>FAQ</Link>
                      <Link className={classes.menuLink} to="/Apply" onClick={handleClose}>Apply Now</Link>
                    </Box>
                  </Menu> 
                </Box>
              </Box>)
              :(
                  <Box className={classes.menuItems}>
                    <Link className={classes.menuLink} to="/">Home</Link>
                    <Link className={classes.menuLink} to="/About">About</Link>
                    <Link className={classes.menuLink} to="/HowItWorks">How it Works</Link>
                    <Link className={classes.menuLink} to="/Faq">FAQ</Link>
                    <Link className={classes.menuLink} to="/Apply"><Button variant="outlined" endIcon={<ArrowRightAltOutlinedIcon />} className={classes.linkBtn}>Apply Now</Button></Link>
                  </Box>
                )
                } 
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default Navbar;





