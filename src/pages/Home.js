import { Box, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import section1Img from '../assets/images/section-one-img.svg'
import OpenDate from '../component/OpenDate';
import Btn from '../utils/Btn';
import DispImg from '../utils/DispImg';
import HomeCard from '../component/HomeCard';
import CountDown from '../component/CountDown';

const useStyles = makeStyles((theme) => ({
  compWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "6em",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      textAlign: "left"
    }
  },
  imgWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginLeft: "50px",
      // alignSelf: "start"
    }
  },
  contentWrap: {
    maxWidth: "450px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      alignSelf: "center"
    }
  },

}))
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="container">
        <Box className={classes.compWrap}>
          <Box className={classes.contentWrap}>
            <Typography 
            variant="h1" 
            color="primary"
            gutterBottom
            >
              Skill up Internship Programmer
            </Typography>
            <Typography color="disabled"><span>Skill up Internship</span> seeks to support individuals interested in building a career in Tech by providing a robust industry-standard experience characterised by measurable hands-on training crafted to help you succeed.</Typography>
            <Btn title="Get Started" />
            <CountDown />
          </Box>
          <Box className={classes.imgWrap}>
            <DispImg src={section1Img} alt="logo"/>
          </Box>
        </Box>
      </Box>
      <OpenDate />
      <HomeCard />
    </>
  )
}

export default Home
