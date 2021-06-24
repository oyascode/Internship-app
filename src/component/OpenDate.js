import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  openDate: {
    width: "100%",
    backgroundColor: "#FFFCF6",
    textAlign: "center",
    paddingTop: "2em",
    paddingBottom: "2em",
    borderTop:"1px solid #DDE3E9",
    borderBottom:"1px solid #DDE3E9",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
  }
})

const OpenDate = () => {
  const classes = useStyles();
  return (
    <Box className={classes.openDate}>
        <Typography
        variant="h4"
        component="h3"
        >
          Application Opening Date
        </Typography>
        <Typography
        variant="body2"
        component="p"
        >
          1st August 2021
        </Typography>
      </Box>
  )
}

export default OpenDate
