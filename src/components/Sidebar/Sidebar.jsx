import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { UserInfo } from './UserInfo/UserInfo';
import styles from './Sidebar.module.css';

export const Sidebar = ({ state }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <Navbar />
      </div>
      <div className={styles.sidebarItem}>
        <UserInfo users={state} />
      </div>

    </div>
  )
}
