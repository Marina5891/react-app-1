import React, { createRef } from 'react';
import styles from './CreateMessage.module.css';

export const CreateMessage = ({ addMessage, newMessageText, updateNewMessageText }) => {

  const textInputValue = createRef();

  const createNewMessage = () => {
    addMessage();
  }

  const onMessageChange = () => {
    let text = textInputValue.current.value;
    updateNewMessageText(text);
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
