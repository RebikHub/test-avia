import React, { ReactNode } from 'react';
import styles from '../styles/Info.module.css';

type Props = {
  children: ReactNode | null,
  cityFrom: string | undefined,
  cityTo: string | undefined,
  date: string | undefined,
  clockFrom: string,
  clockTo: string
};

export default function FlightRoute({children, cityFrom, cityTo, date, clockFrom, clockTo}: Props) {
  
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.logoHead}>Невозвратный</div>
        <span className={styles.logoImage}/>
        <p className={styles.logoText}>S7 Airlines</p>
      </div>
      <div>
        <div className={styles.route}>

        <div className={styles.routeFlight}>
          <p className={styles.routeTime}>{clockFrom}</p>
          <p className={styles.city}>{cityFrom}</p>
          <p className={styles.date}>{date}</p>
        </div>

        <div>
          <div className={styles.routeLine}>
            <div className={styles.start}>
              <p>SVO</p>
            </div>
            <div className={styles.line}/>
            <div className={styles.end}>
              <p>ROV</p>
            </div>
          </div>
          <p className={styles.duration}>В пути 1 ч 55 мин</p>
        </div>

        <div className={styles.routeFlight}>
          <p className={styles.routeTime}>{clockTo}</p>
          <p className={styles.city}>{cityTo}</p>
          <p className={styles.date}>{date}</p>
        </div>

        <div className={styles.bags}>
          <span className={styles.bag}/>
          <span className={styles.bigBag}/>
        </div>

        </div>
        {children}
      </div>
    </div>
  );
};
