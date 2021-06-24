import { Button, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: "2em",
    marginBottom: "1em",
    color: "#fff",
    textTransform: "capitalize",
    backgroundColor: "#1F28CF",
    paddingLeft: "2.5em",
    paddingRight: "2.5em",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#070d91;",
    }
    }
}))

const Btn = ({title, type}) => {
  const classes = useStyles();
  return (
    <>
      <Button disableElevationvariant="contained" className={classes.btn}>
        {title}
      </Button>
    </>
  )
}

export default Btn
