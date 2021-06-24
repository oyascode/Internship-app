import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import Apply4Prog from '../component/Apply4Prog'
import TakeCourse from '../component/TakeCourse'
import CompChallenge from '../component/CompChallenge'
import GetInvited from '../component/GetInvited'

const useStyles = makeStyles({
  compWrap: {
    marginTop: "5em",
  },
  header: {
    textAlign: "center",
  }
});

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <Box className="container">
      <Box compWrap>
        <Box className={classes.header}>
          <Typography variant="h6">
            Become an intern
          </Typography>
          <Typography 
          className={classes.subtitle} variant="h2" 
          gutterBottom
          >
            How it Works
          </Typography>
        </Box>
        <Apply4Prog />
        <TakeCourse />
        <CompChallenge />
        <GetInvited />
      </Box>
    </Box>
  )
}

export default HowItWorks
