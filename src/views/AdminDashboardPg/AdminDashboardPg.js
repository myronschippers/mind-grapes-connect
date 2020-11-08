import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';

function AdminDashboardPg(props) {
  const [pgTitle, setPgTitle] = useState('Home');

  return (
    <div>
      <section>
        <h2>{pgTitle}</h2>
        <div>Tools</div>
      </section>
      <section>
        <h3>Users</h3>
        <ul></ul>
      </section>
    </div>
  );
}

export default AdminDashboardPg;
