import React from 'react';
import { Box, makeStyles, Typography} from '@material-ui/core';
import section8Img from '../assets/images/section-eight-img.png'
import DispImg from '../utils/DispImg';

const useStyles = makeStyles((theme) => ({
  compWrap: {
    marginTop: "5em",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "left",
    }
  },
  imgWrap: {
    marginTop: "2em",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginLeft: "50px",
      alignSelf: "flex-start"
    }
  },
  contentWrap: {
    maxWidth: "500px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      alignSelf: "center"
    }
  },


}))
const CompChallenge = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.compWrap}>
        <Box className={classes.contentWrap}>
          <Typography 
          variant="h3" 
          color="primary"
          gutterBottom
          >
            Complete Challenges
          </Typography>
          <Typography>Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</Typography>
        </Box>
        <Box className={classes.imgWrap}>
          <DispImg src={section8Img} alt="rocking lady"/>
        </Box>
      </Box>
    </>
  )
}

export default CompChallenge;
