import React from 'react';
import styles from './GlobalLayout.module.css';

function GlobalLayout(props) {
  const HeaderContent =
    props.header != null ? props.header : () => <h1>Header</h1>;
  const FooterContent =
    props.footer != null ? props.footer : () => <p>Footer</p>;

  return (
    <div className={styles.scaffold}>
      <div className={styles['scaffold-hd']}>
        <HeaderContent />
      </div>
      <div className={styles['scaffold-bd']}>{props.children}</div>
      <div>
        <FooterContent />
      </div>
    </div>
  );
}

export default GlobalLayout;
