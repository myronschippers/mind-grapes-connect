import React from 'react';
import styles from './Header.module.css';

// CUSTOM COMPONENTS
import MainNav from '../MainNav/MainNav';

function Header(props) {
  return (
    <div className={styles.appBar}>
      <div>
        Mind <span>Grapes</span> Connect
      </div>
      <div>
        <MainNav />
      </div>
    </div>
  );
}

export default Header;
