import React from 'react';
import { Box, makeStyles, Typography} from '@material-ui/core';
import section6Img from '../assets/images/section-six-img.png'
import Btn from '../utils/Btn';
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
      marginLeft: "50px",
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
const Apply4Prog = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="container">
        <Box className={classes.compWrap}>
          <Box className={classes.contentWrap}>
            <Typography 
            variant="h3" 
            color="primary"
            gutterBottom
            >
              Apply for Program
            </Typography>
            <Typography>Fusce egestas elit eget lorem. Praesent ac sem eget est egestas volutpat. Fusce a quam. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis arcu tortor, suscipit eg.</Typography>
            <Btn title="Apply Now" />
          </Box>
          <Box className={classes.imgWrap}>
            <DispImg src={section6Img} alt="rocking lady"/>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Apply4Prog;
