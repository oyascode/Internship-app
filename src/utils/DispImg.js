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
      width: "600px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "700px",
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
