import React from 'react';
import { Post } from './Post/Post';
import { CreatePost } from './CreatePost/CreatePost';
import styles from './MyPosts.module.css';

export const MyPosts = ({ profilePage: { postsData, newPostText }, dispatch }) => {

  const posts = postsData.map(data => <Post post={data.post} like={data.like} key={data.id} />)

  return (
    <div className={styles.posts}>
      <div className={styles.postsItem}>
        <CreatePost
          dispatch={dispatch}
          newPostText={newPostText} />
      </div>
      <div className={styles.postsItem}>
        {posts}
      </div>

    </div>
  )
}
