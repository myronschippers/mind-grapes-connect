import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
} from '@material-ui/core';

function UserList(props) {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      name: 'Sussy',
      email: 'sussy@email.com',
      status: 'active',
    },
    {
      id: 2,
      name: 'Tom',
      email: 'tom@email.com',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Roger',
      email: 'roger@email.com',
      status: 'removed',
    },
  ]);

  handleUserToggle = () => (event) => {};

  return (
    <List>
      {usersList.map((user, index) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar
                alt={`User - ${user.name}`}
                src={`/images/avatar_generic.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={`${user.name}, ${user.email}`}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                value={user.id}
                onChange={handleToggle(user)}
                checked={user.id !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default UserList;
