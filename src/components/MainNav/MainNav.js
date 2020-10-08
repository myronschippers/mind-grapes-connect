import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MATERIAL-UI
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

// MODULES
import navConfig from './nav.config';

function MainNav(props) {
  const [isOpen, setIsOpen] = useState(0);

  const clickToggleOpen = function (event) {
    setIsOpen(!isOpen);
  };

  const navListStyles = {
    padding: '10px',
    overflow: 'hidden',
    position: 'absolute',
    top: '100%',
    right: 0,
    textAlign: 'left',
    backgroundColor: '#fefefe',
    listStyle: 'none',
  };

  if (!isOpen) {
    navListStyles.height = '0';
    navListStyles.padding = '0';
  }

  const navContainerStyles = {
    position: 'relative',
    textAlign: 'right',
  };

  return (
    <nav style={navContainerStyles}>
      <IconButton
        onClick={clickToggleOpen}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={clickToggleOpen}>
        <List>
          {navConfig.map((pgConfig, pgIndex) => {
            return (
              <ListItem key={pgIndex}>
                <ListItemText>
                  <Link to={pgConfig.path}>{pgConfig.text}</Link>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </nav>
  );
}

export default MainNav;
