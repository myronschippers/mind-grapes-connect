import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import {
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

function UserListItem(props) {
  const [count, setCount] = useState(0);
  const { user, handleUserSelect } = props;

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
    <ListItem key={index}>
      <ListItemAvatar>
        <Avatar
          alt={`User - ${user.name}`}
          src={`/images/avatar_generic.jpg`}
        />
        {renderStatus(user)}
      </ListItemAvatar>
      <ListItemText id={labelId} primary={`${user.name}, ${user.email}`} />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          value={user.id}
          onChange={handleUserSelect(user)}
          checked={selectedUsers.indexOf(user.id) !== -1}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default UserListItem;
