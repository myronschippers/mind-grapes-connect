import React, { useState } from 'react';

function ProfilePg(props) {
  const [pgTitle, setPgTitle] = useState('Profile');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default ProfilePg;
