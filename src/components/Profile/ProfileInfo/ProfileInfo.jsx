import React from 'react';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.image} />
      <div className={styles.description}>avatar + description</div>
    </div>
  )
}
