import React, { useState } from 'react';

function UsersPg(props) {
  const [pgTitle, setPgTitle] = useState('Users');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default UsersPg;
