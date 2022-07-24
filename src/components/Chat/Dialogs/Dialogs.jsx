import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import styles from './Dialogs.module.css';

const setActive = ({ isActive }) => (isActive ? `${styles.dialog} ${styles.active}` : `${styles.dialog}`);

export const Dialogs = ({ dialogsData }) => {
  const { user } = useContext(UserContext);
  const dialogs = dialogsData.map(data =>
    <NavLink to={`/chat/${data.id}`} className={setActive} key={data.id}>
      <div>
        <img src={data.avatar} />
      </div>
      <div>
        <h4>{data.name}</h4>
        <p>{data.email}</p>
      </div>
    </NavLink>)

  return (
    <>{dialogs}</>
  )
}
