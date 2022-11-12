import React from 'react';
import styles from './Input.module.css';

type Props = {
  placeholder: string
};

export default function Input({placeholder}: Props) {
  return (
    <input className={styles.input} type='text' placeholder={placeholder}/>
  );
};
