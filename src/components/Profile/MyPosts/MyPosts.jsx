import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = (props) => {
  const posts = props.postsData.map(data =>
    <Post post={data.post} like={data.like} key={data.id} />)

  const createNewPost = () => {
    props.onAddPost();
  }

  const postTextChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  }

  return (
    <div className={styles.posts}>
      <div className={styles.postsItem}>
        <div className={styles.createPost}>
          <textarea
            placeholder="What's on your mind?"
            value={props.newPostText}
            onChange={postTextChange} />
          <button onClick={createNewPost}>Create post</button>
        </div>
      </div>
      <div className={styles.postsItem}>
        {posts}
      </div>

    </div>
  )
}
