import React, { useState } from 'react';

function AdminDashboardPg(props) {
  const [pgTitle, setPgTitle] = useState('Home');

  return (
    <div>
      <h2>{pgTitle}</h2>
    </div>
  );
}

export default AdminDashboardPg;
