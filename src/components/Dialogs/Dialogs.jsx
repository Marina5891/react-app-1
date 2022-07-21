import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const setActive = ({ isActive }) => (isActive ? `${styles.dialog} ${styles.active}` : `${styles.dialog}`);

const Dialog = (props) => {
  return (
    <div>
      <NavLink to={`/dialogs/${props.id}`} className={setActive}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

export const Dialogs = () => {

  let dialogsData = [
    { id: 1, name: 'Marina' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Aigul' },
    { id: 4, name: 'Katia' },
    { id: 5, name: 'Albina' }
  ]

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Hello' },
    { id: 4, message: 'Ku-ku' }
  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={styles.messagesItems}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  )
}
