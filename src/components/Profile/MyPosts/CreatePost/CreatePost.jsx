import React, { createRef } from 'react';
import styles from './CreatePost.module.css';

export const CreatePost = ({ addPost, newPostText, updateNewPostText }) => {

  const textAreaValue = createRef();

  const createNewPost = () => {
    addPost();
  }

  const onPostChange = () => {
    let text = textAreaValue.current.value;
    updateNewPostText(text);
  }

  return (
    <div className={styles.createPost}>
      <textarea
        placeholder="What's on your mind?"
        ref={textAreaValue}
        value={newPostText}
        onChange={onPostChange} />
      <button onClick={createNewPost}>Create post</button>
    </div>
  )
}
