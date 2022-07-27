import React from 'react';
import { Messages } from './Messages/Messages';
import { CreateMessage } from './CreateMessage/CreateMessage';
import { Dialogs } from './Dialogs/Dialogs';
import styles from './Chat.module.css';

export const Chat = ({ chatPage: { dialogsData, messagesData, newMessageText }, addMessage, updateNewMessageText }) => {

  return (
    <div className={styles.chat}>
      <div className={styles.chatItems}>
        <Dialogs dialogsData={dialogsData} />
      </div>
      <div className={styles.messagesItems}>
        <Messages messagesData={messagesData} />
        <CreateMessage
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
          newMessageText={newMessageText} />
      </div>
    </div>
  )
}
