import React from 'react';
import styles from './Messages.module.css';

export const Messages = ({ messagesData }) => {

  const messages = messagesData.map(data => <div className={styles.message} key={data.id}>{data.message}</div>)

  return (
    <>{messages}</>
  )
}
