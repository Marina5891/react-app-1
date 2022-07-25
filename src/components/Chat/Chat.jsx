import React from 'react';
import { Messages } from './Messages/Messages';
import { CreateMessage } from './CreateMessage/CreateMessage';
import { Dialogs } from './Dialogs/Dialogs';
import styles from './Chat.module.css';

export const Chat = ({ state: { dialogsData, messagesData }, handleAddMessage }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatItems}>
        <Dialogs dialogsData={dialogsData} />
      </div>
      <div className={styles.messagesItems}>
        <Messages messagesData={messagesData} />
        <CreateMessage handleAddMessage={handleAddMessage}/>
      </div>
    </div>
  )
}
