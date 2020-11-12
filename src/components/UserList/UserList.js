import React, { useState } from 'react';

// MATERIAL-UI COMPONENTS
import { List } from '@material-ui/core';
import UserListItem from '../UserListItem/UserListItem';

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

  const handleUserSelect = (userInfo) => (event) => {
    let checkedUsers = [...selectedUsers, event.target.value];

    if (selectedUsers.indexOf(event.target.value) !== -1) {
      checkedUsers = selectedUsers.filter((indvUserId) => {
        return indvUserId !== event.target.value;
      });
    }
  };

  return (
    <List>
      {usersList.map((user, index) => {
        return (
          <UserListItem
            user={user}
            key={index}
            userSelectCallback={handleUserSelect}
          />
        );
      })}
    </List>
  );
}

export default UserList;
