import React, { ReactNode } from 'react';
import styles from '../styles/Info.module.css';

type Props = {
  children: ReactNode | null
};

export default function FlightRoute({children}: Props) {
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
          <p className={styles.routeTime}>09:20</p>
          <p className={styles.city}>Москва</p>
          <p className={styles.date}>19.05.2022</p>
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
          <p className={styles.routeTime}>11:05</p>
          <p className={styles.city}>Ростов на Дону</p>
          <p className={styles.date}>19.05.2022</p>
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
