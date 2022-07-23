import React from 'react';
import { Messages } from './Messages/Messages';
import { Dialogs } from './Dialogs/Dialogs';
import styles from './Chat.module.css';

export const Chat = ({ messagesData, dialogsData }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatItems}>
        <Dialogs dialogsData={dialogsData} />
      </div>
      <div className={styles.messagesItems}>
        <Messages messagesData={messagesData} />
      </div>
    </div>
  )
}
