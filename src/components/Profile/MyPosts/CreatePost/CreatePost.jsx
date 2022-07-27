import React, { createRef } from 'react';
import styles from './CreatePost.module.css';

export const CreatePost = ({ store /* addPost, newPostText, updateNewPostText */ }) => {

  const textAreaValue = createRef();

  const createNewPost = () => {
    store.addPost();
  }

  const onPostChange = () => {
    let text = textAreaValue.current.value;
    store.updateNewPostText(text);
  }

  return (
    <div className={styles.createPost}>
      <textarea
        placeholder="What's on your mind?"
        ref={textAreaValue}
        value={store.state.profilePage.newPostText}
        onChange={onPostChange} />
      <button onClick={createNewPost}>Create post</button>
    </div>
  )
}
