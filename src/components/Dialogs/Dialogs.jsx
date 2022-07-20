import React from 'react';
import styles from './Dialogs.module.css';

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>Marina</div>
        <div className={styles.dialog}>Sveta</div>
        <div className={styles.dialog}>Ajgul</div>
        <div className={styles.dialog}>Katia</div>
        <div className={styles.dialog}>Albina</div>
      </div>
      <div className={styles.messagesItems}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>Hello</div>
        <div className={styles.message}>Ku-ku</div>
      </div>
    </div>
  )
}
