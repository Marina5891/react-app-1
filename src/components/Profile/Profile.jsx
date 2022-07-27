import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';

export const Profile = ({ store/* profilePage, addPost, updateNewPostText */ }) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts
        store={store}
        /* profilePage={profilePage}
        addPost={addPost}
        updateNewPostText={updateNewPostText} */ />
    </div>
  )
}
