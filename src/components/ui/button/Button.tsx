import React from 'react';
import styles from './Button.module.css';

type Props = {
  text: string,
  handleClick: () => void,
  disabled: boolean
};

export default function Button({text, handleClick, disabled = false}: Props) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : styles.enabled}`}
      onClick={handleClick}
      disabled={disabled}
      >{text}</button>
  );
};
