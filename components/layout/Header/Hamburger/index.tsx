import React from 'react';
import styles from './style.module.scss'


const Hamburger: React.FC<{ active: boolean }> = ({ active }) => {
  

  return (
    <p>
        Menu
    </p>
  );
};

export default Hamburger;

/*
<svg
      className={styles.hamburger}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 24"
      width="30"
      height="30"
    >
      <line
        className={styles.line1}
        x2="30"
      />
      <line
        className={styles.line2}
        y1="12"
        x2="30"
        y2="12"
      />
      <line
        className={styles.line3}
        y1="12"
        x2="30"
        y2="12"
      />
      <line
        className={styles.line4}
        y1="24"
        x2="30"
        y2="24"
      />
    </svg>
 */