import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = ({ postsData }) => {

  const posts = postsData.map(data => <Post post={data.post} like={data.like} key={data.id} />)

  return (
    <div className={styles.posts}>
      <div className={styles.createPost}>
        <textarea></textarea>
        <button>Create post</button>
      </div>
      {posts}
    </div>
  )
}
