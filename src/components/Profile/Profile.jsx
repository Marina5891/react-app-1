import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';

export const Profile = ({ dispatch, profilePage }) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts
        profilePage={profilePage}
        dispatch={dispatch} />
    </div>
  )
}
