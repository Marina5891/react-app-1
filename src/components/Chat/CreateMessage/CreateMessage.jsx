import React, { createRef } from 'react';
import styles from './CreateMessage.module.css';

export const CreateMessage = ({ store/* addMessage, newMessageText, updateNewMessageText */ }) => {

  const textInputValue = createRef();

  const createNewMessage = () => {
    store.addMessage();
  }

  const onMessageChange = () => {
    let text = textInputValue.current.value;
    store.updateNewMessageText(text);
  }

  return (
    <div className={styles.createMessage}>
      <input
        placeholder='Your message...'
        ref={textInputValue}
        value={store.state.chatPage.newMessageText}
        onChange={onMessageChange} />
      <button onClick={createNewMessage}>Send</button>
    </div>
  )
}
