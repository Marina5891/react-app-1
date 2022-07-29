import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export const Profile = (props) => {
  
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}
