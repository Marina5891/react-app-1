import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../flower.svg';

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={logo} alt='logo' />
        <div>
          {props.isAuth ? <p>{props.login}</p> :
            <Link to='/login'>Login</Link>}
        </div>
      </div>

    </header>
  )
}

