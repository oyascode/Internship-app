import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({

  cardWrap: {
    width: "100%",
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    }
  },
  cardContainer: {
    width: "80%",
    maxWidth: "350px",
    height: "140px",
    paddingTop: "2em",
    paddingBottom: "2em",
    boxShadow: "0px 35px 87px rgba(0, 0, 0, 0.11)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyConten: "center",
    marginBottom: "2em",
    [theme.breakpoints.up("sm")]: {
      marginRight: "2em",
    },
  },
  list: {
    margin: "0",
    paddingLeft: "1.8em",
    paddingRight: "1.8em",
    marginTop: "0.8em",
    fontSize: "0.9rem",
    color: "#4B4F51",
  },
  item: {
    marginBottom: "0.8em"
  }

}))
const HomeCard = () => {
  const classes = useStyles();
  return (
    <Box className="container">
      <Box className={classes.cardWrap}>
        <Box className={classes.cardContainer}>
          <Typography 
          variant="h5"
          color="secondary"
          gutterBottom
          >
            Entry Requirement
          </Typography>
          <ul className={classes.list}>
            <li className={classes.item}>Applicants must posses background knowledge of the subject matter"</li>
            <li className={classes.item}>Applicants must reside in Lagos</li>
          </ul>
        </Box>
        <Box className={classes.cardContainer}>
          <Typography 
          variant="h5"
          color="secondary"
          gutterBottom
          >
            Stipend
          </Typography>
          <ul className={classes.list}>
            <li className={classes.item}>This is a paid internship and as such, participants will receive a stipend of N30,000 monthly for the period of the internship.</li>
          </ul>
        </Box>
        <Box className={classes.cardContainer}>
          <Typography 
          variant="h5"
          color="secondary"
          gutterBottom
          >
            Job Placement
          </Typography>
          <ul className={classes.list}>
            <li className={classes.item}>At the end of the seven (7) months program, outstanding participants will be given jobs</li>
          </ul>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeCard
