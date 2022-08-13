import React from 'react';
import styles from './Post.module.css';
import userImage from '../../../../assets/images/user.png';

export const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src={userImage} />
      <p>{props.post}</p>
      <span>{props.like} likes</span>
    </div>
  )
}
