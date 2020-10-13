import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import { Button, TextField, Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';

// MATERIAL-UI CUSTOM STYLING
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  const [loginError, setLoginError] = useState({ show: false, message: null });
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const handleLoginSubmit = function (event) {
    event.preventDefault();
    console.log('Login With:', loginInfo);
    // TODO - only display error when there is a problem logging in
    setLoginError({
      show: true,
      message:
        'There was something wrong with your email or password. Please try again.',
    });
  };

  const closeError = function () {
    setLoginError({
      ...loginError,
      show: false,
    });
  };

  const handleFieldChange = (dataKey) => (event) => {
    setLoginInfo({
      ...loginInfo,
      [dataKey]: event.target.value,
    });
  };

  return (
    <form className={classes.root} onSubmit={handleLoginSubmit}>
      <Collapse in={loginError.show}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeError}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {loginError.message}
        </Alert>
      </Collapse>
      <TextField
        id="userEmail"
        type="email"
        onChange={handleFieldChange('email')}
        label="Email"
        variant="outlined"
        required
      />
      <TextField
        id="userPassword"
        type="password"
        onChange={handleFieldChange('password')}
        label="Password"
        variant="outlined"
        required
      />
      <div>
        <Button type="submit">CONTINUE</Button>
      </div>
    </form>
  );
}

export default LoginForm;
