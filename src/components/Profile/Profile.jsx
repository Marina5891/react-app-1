import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.content}>
      <div className={styles.image} />
      <div>avatar + description</div>
      <MyPosts />
    </div>
  )
}
