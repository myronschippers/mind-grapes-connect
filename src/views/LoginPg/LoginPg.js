import React from 'react';

// MATERIAL-UI COMPONENTS
import { Typography, Box, Paper } from '@material-ui/core';

// CUSTOM COMPONENTS
import LoginForm from '../../components/LoginForm/LoginForm';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PgLayoutCenterBox from '../../components/PgLayoutCenterBox/PgLayoutCenterBox';

function LoginPg(props) {
  return (
    <PageWrapper>
      <PgLayoutCenterBox title="Login">
        <LoginForm />
      </PgLayoutCenterBox>
    </PageWrapper>
  );
}

export default LoginPg;
