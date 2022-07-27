import React from 'react';
import styles from './Messages.module.css';

export const Messages = ({ store/* messagesData */ }) => {

  const messages = store.state.chatPage.messagesData.map(data => <div className={styles.message} key={data.id}>{data.message}</div>)

  return (
    <div>{messages}</div>
  )
}
