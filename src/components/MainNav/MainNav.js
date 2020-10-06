import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <button onClick={clickToggleOpen}>
        {isOpen === true ? 'Close' : 'Open'}
      </button>
      <ul style={navListStyles}>
        {navConfig.map((pgConfig, pgIndex) => {
          return (
            <li key={pgIndex}>
              <Link to={pgConfig.path}>{pgConfig.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
