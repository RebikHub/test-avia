import React from 'react';
import styles from './Button.module.css';

type Props = {
  text: string,
  handleClick: () => void,
  disabled: boolean,
  type: 'button' | 'submit' | 'reset'
};

export default function Button({text, handleClick, disabled = false, type}: Props) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : styles.enabled}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      >{text}</button>
  );
};
