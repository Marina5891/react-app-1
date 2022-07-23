import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const setActive = ({ isActive }) => (isActive ? `${styles.dialog} ${styles.active}` : `${styles.dialog}`);

export const Dialogs = ({ dialogsData }) => {
  const dialogs = dialogsData.map(data => <NavLink to={`/chat/${data.id}`} className={setActive} key={data.id}>{data.name}</NavLink>)

  return (
    <>{dialogs}</>
  )
}
