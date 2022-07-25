import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';

export const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts
        profilePage={profilePage}
        addPost={addPost}
        updateNewPostText={updateNewPostText} />
    </div>
  )
}
