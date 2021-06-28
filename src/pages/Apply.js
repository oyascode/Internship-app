import React from 'react'
import { Box, TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../utils/Btn';


const useStyles = makeStyles((theme) => ({
  contentWrap: {
    marginTop: "8em",
  },
  header: {
    textAlign: "center",
    marginBottom: "3em",
    marginTop: "3em",
  },
  flexWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "85%",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputField: {
    display: "block",
    padding: "0",
    marginBottom: "1em",
    width: "100%",
    borderRadius: "5px",
    fontSize: "0.6rem"
  },
  
}))
const Apply = () => {
  const classes = useStyles()
  return (
      <Box className="contianer">
        <Box className={classes.contentWrap}>
          <Box className={classes.header}>
          <Typography variant="h6" style={{color: "#1F28CF", fontWeight: "700"}}>
          Fill the form below
          </Typography>
          <Typography 
          className={classes.subtitle} 
          variant="h2"
          color="primary" 
          gutterBottom
          >
            Register
          </Typography>
          </Box>
          <Box className={classes.flexWrap}>
            <Box className={classes.formLogin}>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  className={classes.inputField}
                  label="Name"
                  variant="outlined"
                  color="grey"
                  fullWidth
                  Required
                />
                <TextField
                  className={classes.inputField}
                  label="Phone number"
                  variant="outlined"
                  color="grey"
                  fullWidth
                />
                <TextField
                  className={classes.inputField}
                  label="E-mail address"
                  variant="outlined"
                  color="grey"
                  fullWidth
                  Required
                />
                <TextField
                  className={classes.inputField}
                  label="Password"
                  variant="outlined"
                  color="grey"
                  fullWidth
                  Required
                />
                <Btn title="Register" />
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default Apply;
