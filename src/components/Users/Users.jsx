import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userImage from '../../assets/images/user.png';

export class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount)
      })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalCountPages / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let currentP = this.props.currentPage;
    let currentPF = ((currentP - 5) < 0 ? 0 : currentP - 5)
    let currentPL = currentP + 4;
    let slicedPages = pages.slice(currentPF, currentPL);


    return (
      <div>
        <div className={styles.pagesNavigation}>
          {
            slicedPages.map(page => {
              return (
                <span
                  className={this.props.currentPage === page && styles.activePage}
                  onClick={() => { this.onPageChange(page) }}>{page}</span>
              )
            })
          }
        </div>
        <ul className={styles.users}>
          {this.props.users.map(user => {
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
                    ? <button onClick={() => { this.props.follow(user.id) }}>Unfollow</button>
                    : <button onClick={() => { this.props.unfollow(user.id) }}>Follow</button>
                }

              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}