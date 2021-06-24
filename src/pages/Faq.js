import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Accordion from '../component/Accordion';
import { accordionData } from '../utils/content';

const useStyles = makeStyles({
  accordion: {
    maxWidth: "600px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "2em"
  }
})

const Faq = () => {
  const classes =useStyles()
  return (
    <Box className="container">
      <Box className={classes.header}>
        <Typography variant="h6">
        Questions and answers
        </Typography>
        <Typography 
        className={classes.subtitle} 
        variant="h2" 
        gutterBottom
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box className={classes.accordion}>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
