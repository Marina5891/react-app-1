import React from 'react';
import styles from './Users.module.css';
import userImage from '../../assets/images/user.png';

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