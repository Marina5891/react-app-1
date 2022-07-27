import React from 'react';
import { Messages } from './Messages/Messages';
import { CreateMessage } from './CreateMessage/CreateMessage';
import { Dialogs } from './Dialogs/Dialogs';
import styles from './Chat.module.css';

export const Chat = ({ store/* chatPage: { dialogsData, messagesData, newMessageText }, addMessage, updateNewMessageText  */}) => {

  return (
    <div className={styles.chat}>
      <div className={styles.chatItems}>
        <Dialogs store={store}/* dialogsData={dialogsData} */ />
      </div>
      <div className={styles.messagesItems}>
        <Messages /* messagesData={messagesData} */ store={store} />
        <CreateMessage
          store={store}
          /* addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
          newMessageText={newMessageText} */ />
      </div>
    </div>
  )
}
