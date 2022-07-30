import React from 'react';
import styles from './CreateMessage.module.css';

export const CreateMessage = (props) => {

  const createNewMessage = () => {
    props.onSendMessage();
  }

  const changeMessage = (e) => {
    let text = e.target.value;
    props.onMessageChange(text)
  }

  return (
    <div className={styles.createMessage}>
      <input
        placeholder='Your message...'
        value={props.newMessageText}
        onChange={changeMessage} />
      <button onClick={createNewMessage}>Send</button>
    </div>
  )
}
