import React from 'react';
import styles from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src='https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg' alt='avatar' />
      <p>{props.post}</p>
      <span>{props.like} likes</span>
    </div>
  )
}
