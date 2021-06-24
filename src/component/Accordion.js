import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({

  accordionTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: "#efefef",
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#dddddd40",
    }
  },
  accordionContent: {
    padding: theme.spacing(2),
  }
}))

const Accordion = ({ title, content }) => {
  const classes = useStyles()
  const [isActive, setIsActive] = useState(false);

  return (
    <Box className={classes.accordionItem}>
      <Box className={classes.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <Box>{title}</Box>
        <Box>{isActive ? '-' : '+'}</Box>
      </Box>
      {isActive && <Box className={classes.accordionContent}>{content}</Box>}
    </Box>
  );
};

export default Accordion;