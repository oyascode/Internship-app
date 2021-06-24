import { Box, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import section4Img from '../assets/images/section-four-img.svg'
import Btn from '../utils/Btn';
import DispImg from '../utils/DispImg';
import LearningPath from '../component/LearningPath'

const useStyles = makeStyles((theme) => ({
  compWrap: {
    marginTop: "5em",
    paddingBottom: "3em",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }
  },
  imgWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginRight: "50px",
      alignSelf: "flex-start"
    }
  },
  contentWrap: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
    }
  },

}))

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="container">
        <Box className={classes.compWrap}>
          <Box className={classes.imgWrap}>
            <DispImg src={section4Img} alt=" svg ladies"/>
          </Box>
          <Box className={classes.contentWrap}>
            <Typography 
            variant="h6" 
            color="info.main"
            gutterBottom
            >
              What is it about?
            </Typography>
            <Typography 
            variant="h2" 
            color="primary"
            gutterBottom
            >
              About The Internship
            </Typography>
            <Typography>Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</Typography>
            <Btn title="Get Started" />
          </Box>
        </Box>
        <LearningPath />
      </Box>
    </>
  )
}

export default About;
