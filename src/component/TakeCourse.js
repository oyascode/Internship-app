import React from 'react';
import { Box, makeStyles, Typography} from '@material-ui/core';
import section7Img from '../assets/images/section-seven-img.png';
import DispImg from '../utils/DispImg';

const useStyles = makeStyles((theme) => ({
  compWrap: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }
  },
  imgWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginRight: "80px",
      alignSelf: "flex-start"
    }
  },
  contentWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      alignSelf: "center"
    }
  },

}))
const TakeCourse = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="container">
        <Box className={classes.compWrap}>
          <Box className={classes.imgWrap}>
            <DispImg src={section7Img} alt="rocking lady"/>
          </Box>
          <Box className={classes.contentWrap}>
            <Typography 
            variant="h3" 
            color="primary"
            gutterBottom
            >
              Take Courses
            </Typography>
            <Typography>Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default TakeCourse;