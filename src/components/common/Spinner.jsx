import React from 'react';
import spinner from '../../assets/images/spinner.svg';
import styles from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
        <img src={spinner} />
    </div>
  )
}
