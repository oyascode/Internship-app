import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/images/logo.svg';
import { Link } from "react-router-dom"
import { Box, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    borderTop: "2px solid #22222220",
    marginTop: "3em",
    paddingTop: "2em",
    paddingBottom: "2em"
  },
  menuItems: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
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
  compWrap: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    display:  "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  social: {
    display: "flex",
    fontSize: "1.3rem",
    cursor: "pointer"
  },
  greenIcon: {
    color: "#035755"
  },
  redIcon: {
    color: "#F44A45",
    marginRight: "0.8em",
    marginLeft: "0.8em",
  },
  copyright: {
    backgroundColor: "#1F28CF",
    textAlign: "center",
    color: "#fff",
    padding: theme.spacing(1)
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.compWrap}>
          <Box className={classes.logo}>
          <img style={{width: "110px"}} src={logo} alt="logo" />
          </Box>
          <Box className={classes.menuItems}>
            <Link className={classes.menuLink} to="/">Home</Link>
            <Link className={classes.menuLink} to="/About">About</Link>
            <Link className={classes.menuLink} to="/HowItWorks">How it Works</Link>
            <Link className={classes.menuLink} to="/Faq">FAQ</Link>
            <Link className={classes.menuLink} to="/Apply">Apply Now</Link>
          </Box>
          <Box className={classes.social}>
            <Box className={classes.greenIcon}>
            <i class="fab fa-facebook-f"></i>
            </Box>
            <Box className={classes.redIcon}>
            <i class="fab fa-youtube"></i>
            </Box>
            <Box className={classes.greenIcon}>
            <i class="fab fa-twitter"></i>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.copyright}>
        <Typography variant="caption">
          2021 @ No right reserved
        </Typography>
      </Box>
    </>
    );
}

export default Footer;





