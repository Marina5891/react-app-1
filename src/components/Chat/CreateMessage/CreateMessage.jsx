import React, { createRef } from 'react';
import styles from './CreateMessage.module.css';

export const CreateMessage = ({ newMessageText, dispatch }) => {

  const textInputValue = createRef();

  const createNewMessage = () => {
    dispatch({type: 'ADD-MESSAGE'})
  }

  const onMessageChange = () => {
    let text = textInputValue.current.value;
    dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})
  }

  return (
    <div className={styles.createMessage}>
      <input
        placeholder='Your message...'
        ref={textInputValue}
        value={newMessageText}
        onChange={onMessageChange} />
      <button onClick={createNewMessage}>Send</button>
    </div>
  )
}
