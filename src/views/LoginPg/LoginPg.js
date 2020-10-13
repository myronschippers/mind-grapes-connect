import React from 'react';

// MATERIAL-UI COMPONENTS
import { Typography, Box, Paper } from '@material-ui/core';

// CUSTOM COMPONENTS
import LoginForm from '../../components/LoginForm/LoginForm';

// MATERIAL-UI CUSTOM STYLING
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: '400px',
    maxWidth: '85%',
    margin: '0 auto',
  },
  loginHd: {
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

function LoginPg(props) {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.root}>
      <Paper>
        <Box component="div" p={3}>
          <Typography component="h2" variant="h4" className={classes.loginHd}>
            Login
          </Typography>
          <LoginForm />
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginPg;
