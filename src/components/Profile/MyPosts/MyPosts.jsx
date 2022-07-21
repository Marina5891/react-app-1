import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = () => {

  let postsData = [
    { id: 1, post: 'Hi! How are you?', like: 3 },
    { id: 2, post: 'It is my first post', like: 2 },
    { id: 3, post: 'Ha-ha-ha', like: 10 }
  ]

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
