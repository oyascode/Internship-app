import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core';
import frontendImg from '../assets/images/section-five-img-one.svg'
import backendImg from '../assets/images/section-five-img-two.svg'

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: " 2em"
  },
  subtitle: {
    maxWidth: "350px",
    textAlign: "center",
    fontSize: "0.8rem"
  },
  compWrap: {
    width: "100%",
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  cardWrap: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly"
    }
  },
  card:{
    width: "80%",
    maxWidth: "400px",
    height: "250px",
    boxShadow: "0px 35px 87px rgba(0, 0, 0, 0.11)",
    borderRadius: "6px",
    borderBottom: "5px solid #1F28CF",
    paddingTop: "2em",
    paddingBottom: "2em",
    marginBottom: "2em",
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginRight: "3em",
    }
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",  
  },
  cardLink: {
    fontSize: "0.9rem",
    color: "#4B4F51",
    lineHeight: "1.6",
  }
}))

const LearningPath = () => {
  const classes = useStyles();
  return (
    <Box class="container">
      <Box className={classes.compWrap}>
        <Box className={classes.header}>
          <Typography variant="h2" gutterBottom color="primary">
            Learning Paths
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2">
            Sharpen and build your skills by taking these courses before applying 
          </Typography>
        </Box>
        <Box className={classes.cardWrap}>
          <Box className={classes.card} >
            <Box className={classes.cardHeader}>
              <img className={classes.cardImg} src={frontendImg} alt="screen showing codes" width="150" />
            </Box>
            <Box className={classes.cardBody}>
              <Typography 
              variant="h5" 
              color="secondary" 
              gutterBottom
              >
                Frontend Development
              </Typography>
              <a href="#about" className={classes.cardLink}>Learn HTM</a>
              <a href="#abou" className={classes.cardLink}>Learn CSS</a>
              <a href="#abou" className={classes.cardLink}>Learn JavaScript</a>
            </Box>
          </Box>
          <Box className={classes.card}>
            <Box className={classes.cardHeader}>
              <img className={classes.cardImg} src={backendImg} alt="desktop connected to server" width="150" />
            </Box>
            <Box className={classes.cardBody}>
            <Typography 
            variant="h5" 
            color="secondary"
            gutterBottom
            >
              Backend Development
            </Typography>
              <a href="#about" className={classes.cardLink}>Learn DS and Algorithm</a>
              <a href="#about" className={classes.cardLink}>Learn Java Programming</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LearningPath;


