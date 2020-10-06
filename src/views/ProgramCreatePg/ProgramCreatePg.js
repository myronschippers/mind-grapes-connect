import React, { useState } from 'react';

function ProgramCreatePg(props) {
  const [pgTitle, setPgTitle] = useState('Create Program');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default ProgramCreatePg;
