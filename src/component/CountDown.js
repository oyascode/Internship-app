import React, { useState, useEffect, useRef } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  countDown: {
    display:  "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1em",
    [theme.breakpoints.up("md")]: {
      alignItems: "start",
    }

  },
  timerWrap: {
    display: "flex",
    marginBottom: "3em",
  },
  displayTimer: {
    width: "45px",
    height: "auto",
    backgroundColor: "#F3F3F3",
    marginRight: "0.4em",
    boxShadow: "5px 5px 30px 2px rgba(0,0,0,0.25)",
    textAlign: "center",
    paddingTop: "0.3em",
    paddingBottom: "0.2em"
  },
  timerNum : {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4rem",
    }
  },
  timerText: {
    borderTop: "1px solid #ccc",
    fontSize: "0.4rem"
  }
}))

const CountDown = () => {

  const [daysLeft, setDaysLeft] = useState("00");
  const [hoursLeft, setHoursLeft] = useState("00");
  const [minutesLeft, setMinutesLeft] = useState("00");
  const [secondsLeft, setSecondsLeft] = useState("00");

  let interval = useRef();

  const getTimer = () => {
    const countDownDate = new Date("October 31, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = countDownDate - currentTime;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60 ));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      if (timeDiff < 0) {
        clearInterval(interval.current);

      } else {
        setDaysLeft(days);
        setHoursLeft(hours);
        setMinutesLeft(minutes);
        setSecondsLeft(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    getTimer();
    // return () => {
    //   clearInterval(interval.current);
    // };
  });

  const classes = useStyles();
  return (  
    <Box className={classes.countDown}>
      <Typography 
      className={classes.timerTitle}
      gutterBottom>
        Application Starts In:
      </Typography>
      <Box className={classes.timerWrap} >
        <Box className={classes.displayTimer}>
          <Typography className={classes.timerNum}>{daysLeft}</Typography>
          <Typography className={classes.timerText}>DAYS</Typography>
        </Box>
        <Box className={classes.displayTimer}>
          <Typography className={classes.timerNum}>{hoursLeft}</Typography>
          <Typography className={classes.timerText}>HOURS</Typography>
        </Box> 
        <Box className={classes.displayTimer}>
          <Typography className={classes.timerNum}>{minutesLeft}</Typography>
          <Typography className={classes.timerText}>MINUTES</Typography>
        </Box>
        <Box className={classes.displayTimer}>
          <Typography className={classes.timerNum}>{secondsLeft}</Typography>
          <Typography className={classes.timerText}>SECONDS</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CountDown;
