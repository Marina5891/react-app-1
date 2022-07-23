import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = ({ postsData }) => {
  return (
    <div className={styles.posts}>
      <div className={styles.createPost}>
        <textarea></textarea>
        <button>Create post</button>
      </div>

      <Post post={postsData[0].post} like={postsData[0].like} />
      <Post post={postsData[1].post} like={postsData[1].like} />
      <Post post={postsData[2].post} like={postsData[2].like} />

    </div>
  )
}
