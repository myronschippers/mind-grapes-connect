import React from 'react';
import styles from './Header.module.css';

// MATERIAL-UI
import { Typography, AppBar, Toolbar } from '@material-ui/core';

// CUSTOM COMPONENTS
import MainNav from '../MainNav/MainNav';

function Header(props) {
  return (
    <AppBar>
      <Toolbar>
        <div>
          Mind <span>Grapes</span> Connect
        </div>
        <div className={styles['appBar-nav']}>
          <MainNav />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
