import React from 'react';
import styles from './Header.module.css';
import logo from '../../flower.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={logo} alt='logo' />
      </div>
    </header>
  )
}

