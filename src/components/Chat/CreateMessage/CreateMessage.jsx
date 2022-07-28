import React, { createRef } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';
import styles from './CreateMessage.module.css';

export const CreateMessage = ({ newMessageText, dispatch }) => {

  const textInputValue = createRef();

  const createNewMessage = () => {
    dispatch(addMessageActionCreator());
  }

  const onMessageChange = () => {
    let text = textInputValue.current.value;
    dispatch(updateNewMessageTextActionCreator(text));
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
