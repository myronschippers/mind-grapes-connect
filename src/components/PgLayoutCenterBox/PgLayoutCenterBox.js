import React from 'react';

// MATERIAL-UI COMPONENTS
import { Typography, Box, Paper } from '@material-ui/core';

// MATERIAL-UI CUSTOM STYLING
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: '550px',
    maxWidth: '85%',
    margin: '0 auto',
  },
  pageHd: {
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    '&::before': {
      content: '""',
      width: '80%',
      height: '1px',
      backgroundColor: theme.palette.divider,
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: `translate(-50%, 0)`,
    },
  },
}));

function PgLayoutCenterBox(props) {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Paper>
        <Box component="div" p={3}>
          <Typography component="h2" variant="h4" className={classes.pageHd}>
            {props.title}
          </Typography>
          {props.children}
        </Box>
      </Paper>
    </Box>
  );
}

export default PgLayoutCenterBox;
