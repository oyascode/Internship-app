import React from 'react';
import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  displayImg: {
    display: "block",
    width: "400px",
    maxWidth: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      maxWidth: "600px",
      marginRight: "0",
      marginLeft: "0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "600px",
    }
  }
}))

const DispImg = ({src, alt}) => {
  const classes = useStyles();
  return (
    <Box className={classes.imgContainer}>
      <img className={classes.displayImg} src={src} alt={alt} />
    </Box>
  )
}

export default DispImg;
