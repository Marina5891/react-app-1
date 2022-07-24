import React, { useState } from 'react';
import styles from './CreateMessage.module.css';

export const CreateMessage = () => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    alert(inputValue)
  }

  return (
    <div className={styles.createMessage}>
      <input onChange={handleChange} value={inputValue} placeholder='Your message...' />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}
