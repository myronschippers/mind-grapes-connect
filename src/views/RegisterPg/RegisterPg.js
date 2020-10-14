import React from 'react';

// MATERIAL-UI COMPONENTS
import { Typography, Box, Paper } from '@material-ui/core';

// CUSTOM COMPONENTS
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PgLayoutCenterBox from '../../components/PgLayoutCenterBox/PgLayoutCenterBox';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegisterPg(props) {
  return (
    <PageWrapper>
      <PgLayoutCenterBox title="Registration">
        <RegistrationForm />
      </PgLayoutCenterBox>
    </PageWrapper>
  );
}

export default RegisterPg;
