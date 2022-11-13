import React from 'react';
import styles from '../styles/Info.module.css';

type Props = {
  handleTime: () => void,
  time: string,
  text: string
};

export default function ChangeClock({handleTime, time, text}: Props) {
  return (
    <div
      className={time ? styles.timeClicked : styles.time}
      onClick={handleTime}
    >
      {text}
    </div>
  );
};
