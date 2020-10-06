import React, { useState } from 'react';

function ProgramsPg(props) {
  const [pgTitle, setPgTitle] = useState('Programs');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default ProgramsPg;
