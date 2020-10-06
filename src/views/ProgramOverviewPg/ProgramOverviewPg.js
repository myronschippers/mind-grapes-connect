import React, { useState } from 'react';

function ProgramOverviewPg(props) {
  const [pgTitle, setPgTitle] = useState('Program Overview');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default ProgramOverviewPg;
