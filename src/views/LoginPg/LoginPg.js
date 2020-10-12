import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import { Typography } from '@material-ui/core';

// CUSTOM COMPONENTS
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPg(props) {
  const [loginError, setLoginError] = useState(0);

  return (
    <div>
      <Typography component="h2" variant="h4">
        Login
      </Typography>
      <LoginForm />
    </div>
  );
}

export default LoginPg;
