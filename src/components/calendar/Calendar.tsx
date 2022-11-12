import React, { useEffect, useState } from 'react';
import styles from './Calendar.module.css';
import DaysInWeek from './DaysInWeek';
import { date, monthInWeeks, Weeks } from '../../utils/date';

type Props = {
  none: string,
  getDateThere: (date: string) => void,
  getDateBack: (date: string) => void,
};

export default function Calendar({none, getDateThere, getDateBack}: Props) {

  const [numMonth, setNumMonth] = useState(date.numberMonth);
  const [nameMonth, setNameMonth] = useState(date.month);
  const [days, setDays] = useState<Weeks | null>(null);

  useEffect(() => {
    const weeks = monthInWeeks(numMonth);
    setDays(weeks);
  }, [numMonth]);

  function onChoiceDate(day: number, month: number) {
    const choiceDate = date.choiceDate(date.year, month, day);

    if (none === 'there') {
      getDateThere(choiceDate);
    };

    if (none === 'back') {
      getDateBack(choiceDate);
    };

  };

  function prevMonth() {
    setNumMonth((prev) => (prev - 1));
    setNameMonth(date.nameMonth(date.year, numMonth - 1));
  };

  function nextMonth() {
    setNumMonth((prev) => (prev + 1));
    setNameMonth(date.nameMonth(date.year, numMonth + 1));
  };

  return (
    <div className={none === 'there' ? styles.calendarThere : none === 'back' ? styles.calendarBack : styles.none}>
      <div className={styles.main}>
        <div className={styles.month}>
          <button className={styles.prevMonth} onClick={prevMonth} type='button'></button>
          <p className={styles.name}>{nameMonth}</p>
          <button className={styles.nextMonth} onClick={nextMonth} type='button'></button>
        </div>
        <table className={styles.table}>
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className={styles.weekend}/>
            <col className={styles.weekend}/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
            {days !== null ? <tbody>
              {Object.entries(days).map((el) => 
                <DaysInWeek
                  array={el[1]}
                  date={date.numDate}
                  currentMonth={date.numberMonth}
                  otherMonth={numMonth}
                  onChoiceDate={onChoiceDate}
                  key={el[0]}/>
              )}
            </tbody> : null}
        </table>
      </div>
    </div>
  )
}