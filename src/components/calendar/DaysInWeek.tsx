import React from 'react';
import { Day } from '../../utils/date';
import styles from './Calendar.module.css';

type Props = {
  array: Day[],
  date: number,
  currentMonth: number,
  otherMonth: number,
  onChoiceDate: (day: number, month: number) => void
};

export default function DaysInWeek({array, date, currentMonth, otherMonth, onChoiceDate}: Props) {
  
  return (
    <tr>
      {array.map((el, i: number) => {
        if (el.curDay !== 'this') {
          return <td className={styles.otherMonth} onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
        } else if (el.curDay === 'this' && el.numDay === date && currentMonth === otherMonth) {
          return <td className={styles.today} onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
        } else if (el.curDay === 'this') {
          return <td onClick={() => onChoiceDate(el.numDay, otherMonth)} key={el.numDay + i}>{el.numDay}</td>
        }
        return null;
      })}
    </tr>
  );
};