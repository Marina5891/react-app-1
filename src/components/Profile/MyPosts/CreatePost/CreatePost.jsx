import React, { createRef } from 'react';
import styles from './CreatePost.module.css';

export const CreatePost = ({ newPostText, dispatch }) => {

  const textAreaValue = createRef();

  const createNewPost = () => {
    dispatch({type: 'ADD-POST'});
  }

  const onPostChange = () => {
    let text = textAreaValue.current.value;
    dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
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
