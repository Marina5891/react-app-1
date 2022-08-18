import React from 'react';
import { Spinner } from '../../common/Spinner';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';

export const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Spinner />
  }

  return (
    <div className={styles.profileInfo}>
      <div className={styles.image} />
      <div className={styles.aboutUser}>
        <div className={styles.avatar}>
          {
            props.profile.photos.small != null ?
              (<img src={props.profile.photos.small} />)
              : (<img src={userPhoto} />)
          }
        </div>

        <div className={styles.description}>
          <h5>{props.profile.fullName}</h5>
          <p>{props.profile.contacts.github}</p>
        </div>
      </div>
    </div>
  )
}
