import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';

export const Profile = ({ state: { postsData }, handleAddPost }) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPosts postsData={postsData} handleAddPost={handleAddPost} />
    </div>
  )
}
