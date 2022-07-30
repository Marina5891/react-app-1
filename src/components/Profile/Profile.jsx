import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export const Profile = () => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
