import { Box, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import section1Img from '../assets/images/section-one-img.svg'
import OpenDate from '../component/OpenDate';
import Btn from '../utils/Btn';
import DispImg from '../utils/DispImg';
import HomeCard from '../component/HomeCard';

const useStyles = makeStyles((theme) => ({
  compWrap: {
    marginTop: "5em",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }
  },
  imgWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginLeft: "50px",
      alignSelf: "flex-start"
    }
  },
  contentWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
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
            <Typography><span>Skill up Internship</span> seeks to support individuals interested in building a career in Tech by providing a robust industry-standard experience characterised by measurable hands-on training crafted to help you succeed.</Typography>
            <Btn title="Get Started" />
            <Box class="count-down">
              <Typography>Application Starts In:</Typography>
              <Box className={classes.counter}>
                <div class="day">
                  <p class="days-left"></p>
                  <p>Days</p>
                </div>
                <div class="hours">
                  <p class="hours-left"></p>
                  <p>Hours</p>
                </div>
                <div class="minutes">
                  <p class="minutes-left"></p>
                  <p>Minutes</p>
                </div>
                <div class="seconds">
                  <p class="seconds-left"></p>
                  <p>Seconds</p>
                </div>
              </Box>
            </Box>
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
