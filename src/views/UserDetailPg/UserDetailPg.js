import React, { useState } from 'react';

function UserDetailPg(props) {
  const [pgTitle, setPgTitle] = useState('User Detail');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default UserDetailPg;
