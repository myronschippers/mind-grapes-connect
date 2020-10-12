import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import { Button, TextField } from '@material-ui/core';

function LoginForm(props) {
  const [loginError, setLoginError] = useState(null);
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  function handleLoginSubmit(event) {
    event.preventDefault();
    console.log('Login With:', loginInfo);
    // TODO - only display error when there is a problem logging in
    setLoginError(
      'There was something wrong with your email or password. Please try again.'
    );
  }

  const handleFieldChange = (dataKey) => (event) => {
    setLoginInfo({
      ...loginInfo,
      [dataKey]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <TextField
        id="userEmail"
        type="text"
        onChange={handleFieldChange('email')}
        label="Email:"
      />
      <TextField
        id="userPassword"
        type="password"
        onChange={handleFieldChange('password')}
        label="Password:"
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
