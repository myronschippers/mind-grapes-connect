import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import {
  Button,
  TextField,
  Collapse,
  IconButton,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';

const ALL_STEPS = [
  {
    label: 'User Info',
  },
  {
    label: 'Validate User',
  },
  {
    label: 'Reset Password',
  },
];

function ForgotPassForm(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState({ show: false, message: null });

  const closeError = () => {
    setErrorMsg({
      ...errorMsg,
      show: false,
    });
  };

  const clickNext = () => {
    console.log('Clicked Next');
    let nextStep = currentStep + 1;

    if (nextStep >= ALL_STEPS.length) {
      nextStep = 0;
    }
    setCurrentStep(nextStep);
  };

  const handleFieldChange = (dataKey) => (event) => {
    console.log(dataKey);
  };

  return (
    <div>
      <div>
        <Stepper activeStep={currentStep} alternativeLabel>
          {ALL_STEPS.map((item, index) => {
            return (
              <Step key={index}>
                <StepLabel>{item.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <Collapse in={errorMsg.show}>
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
          {errorMsg.message}
        </Alert>
      </Collapse>
      <form>
        {currentStep === 0 && (
          <div>
            <Box mb={2}>
              <TextField
                id="email"
                type="email"
                onChange={handleFieldChange('email')}
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                id="phoneNumber"
                type="number"
                onChange={handleFieldChange('phoneNumber')}
                label="Phone Number"
                variant="outlined"
                fullWidth
              />
            </Box>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <Box mb={2}>
              <Typography component="p" variant="body2">
                A verification code has been sent to your phone. Please enter it
                in the field below.
              </Typography>
            </Box>
            <Box mb={2}>
              <TextField
                id="verificationCode"
                type="text"
                onChange={handleFieldChange('verificationCode')}
                label="Verification Code"
                variant="outlined"
                fullWidth
              />
            </Box>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <Box mb={2}>
              <Typography component="p" variant="body2">
                Password must be more than 10 characters and contain at least
                one of each of the following; letter, number, &amp; special
                character (!@#$%^&*).
              </Typography>
            </Box>
            <Box mb={2}>
              <TextField
                id="password"
                type="password"
                onChange={handleFieldChange('password')}
                label="Password"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                id="confirmPassword"
                type="password"
                onChange={handleFieldChange('confirmPassword')}
                label="Confirm Password"
                variant="outlined"
                fullWidth
              />
            </Box>
          </div>
        )}
        <Button type="button" onClick={clickNext}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassForm;
