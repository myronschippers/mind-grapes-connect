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

function RegistrationForm(props) {
  const classes = useStyles();
  const [regError, setRegError] = useState({ show: false, message: null });
  const [regInfo, setRegInfo] = useState({ email: '', password: '' });

  const handleLoginSubmit = function (event) {
    event.preventDefault();
    console.log('Login With:', regInfo);
    // TODO - only display error when there is a problem logging in
    setRegError({
      show: true,
      message:
        'There was something wrong with your email or password. Please try again.',
    });
  };

  const closeError = function () {
    setRegError({
      ...regError,
      show: false,
    });
  };

  const handleFieldChange = (dataKey) => (event) => {
    setRegInfo({
      ...regInfo,
      [dataKey]: event.target.value,
    });
  };

  return (
    <form className={classes.root} onSubmit={handleLoginSubmit}>
      <Collapse in={regError.show}>
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
          {regError.message}
        </Alert>
      </Collapse>
      <TextField
        id="firstName"
        type="text"
        onChange={handleFieldChange('firstName')}
        label="First Name"
        variant="outlined"
        required
      />
      <TextField
        id="lastName"
        type="text"
        onChange={handleFieldChange('lastName')}
        label="Last Name"
        variant="outlined"
        required
      />
      <TextField
        id="phoneNumber"
        type="number"
        onChange={handleFieldChange('phoneNumber')}
        label="Phone Name"
        variant="outlined"
        required
      />
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
      <TextField
        id="userPasswordConfirmation"
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

export default RegistrationForm;
