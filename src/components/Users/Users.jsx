import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Users.module.css';
import userImage from '../../assets/images/user.png';
import * as axios from 'axios';

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCountPages / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let currentP = props.currentPage;
  let currentPF = ((currentP - 5) < 0 ? 0 : currentP - 5)
  let currentPL = currentP + 4;
  let slicedPages = pages.slice(currentPF, currentPL);

  return (
    <div>
      <div className={styles.pagesNavigation}>
        {
          slicedPages.map((page, i) => {
            return (
              <span
                key={i}
                className={props.currentPage === page ? styles.activePage : null}
                onClick={() => { props.onPageChange(page) }}>{page}
              </span>
            )
          })
        }
      </div>
      <ul className={styles.users}>
        {props.users.map((user, i) => {
          return (
            <li key={i} className={styles.userItem}>
              <span className={styles.userAvatar}>
                <Link to={`/profile/${user.id}`}>
                  <img src={user.photos.small !== null ? user.photos.small : userImage} />
                </Link>

              </span>
              <p className={styles.userDescription}>
                <span>{user.name}</span>
                <span>{user.status !== null ? user.status : 'I\'m a frontend-developer'}</span>
              </p>
              {
                user.followed
                  ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '51ae7718-5f14-4063-acc9-b5a2cefc043c'
                      }
                    })
                    .then(response => {
                      props.unfollow(user.id)
                    })
                    
                  }}>Unfollow</button>
                  : <button onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '51ae7718-5f14-4063-acc9-b5a2cefc043c'
                      }
                    })
                    .then(response => {
                      props.follow(user.id)
                    })
                  }}>Follow</button>
              }
            </li>
          )
        })}
      </ul>
    </div>
  )
}