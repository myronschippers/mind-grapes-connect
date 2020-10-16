import React from 'react';

// MATERIAL-UI COMPONENTS
import { TextField } from '@material-ui/core';

// MATERIAL-UI CUSTOM STYLING
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px',
  },
}));

function PhoneNumberField(props) {
  const FinalContainer = props.component ? props.component : 'div';
  const classes = useStyles();

  const handleFieldChange = (dataKey) => (event) => {
    const fieldValue = event.target.value;
  };

  return (
    <FinalContainer className={classes.root}>
      (
      <TextField
        id="phoneAreaCode"
        type="number"
        onChange={handleFieldChange('phoneAreaCode')}
        label="Phon Name"
        variant="outlined"
        required
      />
      ) &nbsp;
      <TextField
        id="phoneAreaCode"
        type="number"
        onChange={handleFieldChange('phoneStart')}
        label="Phon Name"
        variant="outlined"
        required
      />
      -
      <TextField
        id="phoneAreaCode"
        type="number"
        onChange={handleFieldChange('phoneEnd')}
        label="Phon Name"
        variant="outlined"
        required
      />
    </FinalContainer>
  );
}

export default PhoneNumberField;
