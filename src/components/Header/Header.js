import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.appBar}>
      <div>
        Mind <span>Grapes</span> Connect
      </div>
      <div>Nav</div>
    </div>
  );
}

export default Header;
