import React, { useState } from 'react';

function UserCreatePg(props) {
  const [pgTitle, setPgTitle] = useState('Create a User');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default UserCreatePg;
