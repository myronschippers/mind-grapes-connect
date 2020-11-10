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
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function UserList(props) {
  const [selectedUsers, setSelectedUsers] = useState([]);
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

  const handleUserToggle = (userInfo) => (event) => {
    let checkedUsers = [...selectedUsers, event.target.value];

    if (selectedUsers.indexOf(event.target.value) !== -1) {
      checkedUsers = selectedUsers.filter((indvUserId) => {
        return indvUserId !== event.target.value;
      });
    }
  };

  function renderStatus(userInfo) {
    switch (userInfo.status) {
      case 'active':
        return <SentimentVerySatisfiedIcon />;
      case 'removed':
        return <SentimentVeryDissatisfiedIcon />;
      case 'pending':
        return <SentimentDissatisfiedIcon />;
      default:
        return <SentimentSatisfiedIcon />;
    }
  }

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
              {renderStatus(user)}
            </ListItemAvatar>
            <ListItemText
              id={labelId}
              primary={`${user.name}, ${user.email}`}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                value={user.id}
                onChange={handleUserToggle(user)}
                checked={selectedUsers.indexOf(user.id) !== -1}
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
