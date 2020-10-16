import React from 'react';

// MATERIAL-UI COMPONENTS
import { Typography, Box, Paper } from '@material-ui/core';

// CUSTOM COMPONENTS
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PgLayoutCenterBox from '../../components/PgLayoutCenterBox/PgLayoutCenterBox';
import ForgotPassForm from '../../components/ForgotPassForm/ForgotPassForm';

function ForgotPassPg(props) {
  return (
    <PageWrapper>
      <PgLayoutCenterBox title="Forgot Password">
        <ForgotPassForm />
      </PgLayoutCenterBox>
    </PageWrapper>
  );
}

export default ForgotPassPg;
