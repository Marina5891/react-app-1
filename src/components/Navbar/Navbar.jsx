import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const setActive = ({ isActive }) => (isActive ? styles.active : '')

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbarItems}>
        <ul>
          <li className={styles.navbarItem}>
            <NavLink
              to='/profile' className={setActive}>
              Profile</NavLink>
          </li>
          <li className={styles.navbarItem}>
            <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
          </li>
          <li className={styles.navbarItem}><a>News</a></li>
          <li className={styles.navbarItem}><a>Music</a></li>
          <li className={styles.navbarItem}><a>Settings</a></li>
        </ul>
      </nav>
    </div>
  )
}
