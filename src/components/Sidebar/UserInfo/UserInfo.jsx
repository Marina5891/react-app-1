import React from 'react';
import styles from './UserInfo.module.css';

export const UserInfo = ({ users }) => {

  const usersBlock = users.map(data => <li className={styles.userInfoItem} key={data.id}><img src={data.avatar} title={data.name} /></li>)

  return (
    <ul className={styles.userInfo}>
      {usersBlock}
    </ul>
  )
}
