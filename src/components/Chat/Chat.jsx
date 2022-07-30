import React from 'react';
import { Messages } from './Messages/Messages';
import { CreateMessage } from './CreateMessage/CreateMessage';
import { Dialogs } from './Dialogs/Dialogs';
import styles from './Chat.module.css';

export const Chat = (props) => {

  return (
    <div className={styles.chat}>
      <div className={styles.chatItems}>
        <Dialogs dialogsData={props.chatPage.dialogsData} />
      </div>
      <div className={styles.messagesItems}>
        <Messages messagesData={props.chatPage.messagesData} />
        <CreateMessage
          newMessageText={props.chatPage.newMessageText}
          onMessageChange={props.onMessageChange}
          onSendMessage={props.onSendMessage} />
      </div>
    </div>
  )
}
