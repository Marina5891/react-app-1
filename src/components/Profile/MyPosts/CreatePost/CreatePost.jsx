import React, { useState, createRef } from 'react';
import styles from './CreatePost.module.css';

export const CreatePost = ({ handleAddPost }) => {
  //const [textAreaValue, setTextAreaValue] = useState("");

  const newPostElement = createRef();

  const addNewPost = () => {
    let text = newPostElement.current.value;
  }

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  }

  const handleClick = () => {
    handleAddPost(textAreaValue)
  }

  return (
    <div className={styles.createPost}>
      <textarea onChange={handleChange} value={textAreaValue} placeholder="What's on your mind?" ref={newPostElement} />
      <button onClick={handleClick}>Create post</button>
    </div>
  )
}
