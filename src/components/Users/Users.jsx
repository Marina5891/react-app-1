import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userImage from '../../assets/images/user.png';

export const Users = (props) => {

  axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => props.setUsers(response.data.items))
  /*   if (props.users.length === 0) {
      props.setUsers([
        {
          id: 1,
          fullName: 'Marina',
          status: 'I\'m a frontend-developer',
          followed: true,
          avatar: 'https://i.yapx.cc/Ra8I0.jpg',
          address: { city: 'Moscow', country: 'Russia' }
        },
        {
          id: 2,
          fullName: 'Sveta',
          status: 'I\'m beautiful',
          followed: true,
          avatar: 'https://i.yapx.cc/Ra8I4.jpg',
          address: { city: 'Saint Petersburg', country: 'Russia' }
        },
        {
          id: 3,
          fullName: 'Aigul',
          status: 'I\'m a boss',
          followed: false,
          avatar: 'https://i.yapx.cc/Ra8JA.jpg',
          address: { city: 'Orenburg', country: 'Russia' }
        },
        {
          id: 4,
          fullName: 'Katia',
          status: 'I\'m the boss\'s friend',
          followed: false,
          avatar: 'https://i.yapx.cc/Ra8JB.jpg',
          address: { city: 'Orenburg', country: 'Russia' }
        },
        {
          id: 5,
          fullName: 'Albina',
          status: 'I\'m cunning',
          followed: false,
          avatar: 'https://i.yapx.cc/Ra8JI.jpg',
          address: { city: 'Orenburg', country: 'Russia' }
        }
      ])
    } */

  return (
    <div>
      <ul className={styles.users}>
        {props.users.map(user => {
          return (
            <li key={user.id} className={styles.userItem}>
              <span className={styles.userAvatar}>
                <img src={user.photos.small !== null ? user.photos.small : userImage} />
              </span>
              <p className={styles.userDescription}>
                <span>{user.name}</span>
                <span>{user.status !== null ? user.status : 'I\'m a frontend-developer'}</span>
              </p>
              {
                user.followed
                  ? <button onClick={() => { props.follow(user.id) }}>Unfollow</button>
                  : <button onClick={() => { props.unfollow(user.id) }}>Follow</button>
              }

            </li>
          )
        })}
      </ul>
    </div>
  )
}
