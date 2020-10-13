import React from 'react';

// MATERIAL-UI COMPONENTS
import { Box } from '@material-ui/core';

// MATERIAL-UI CUSTOM STYLING
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
  },
}));

function PageWrapper(props) {
  const classes = useStyles();

  return (
    <Box pt={4} pr={2} pb={4} pl={2} className={classes.root}>
      {props.children}
    </Box>
  );
}

export default PageWrapper;
