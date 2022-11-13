import React, { useState } from 'react';
import styles from '../../styles/Info.module.css';
import FlightRoute from '../FlightRoute';

type Time = {
  first: {
    from: string,
    to: string
  },
  second: {
    from: string,
    to: string,
  },
  third: {
    from: string,
    to: string
  }
};

export default function Info() {
  const [time, setTime] = useState<Time>({
    first: {
      from: '09:20',
      to: '11:05'
    },
    second: {
      from: '',
      to: '',
    },
    third: {
      from: '',
      to: ''
    }
  });

  function handleTimeFirst() {
    setTime({
      first: {
        from: '09:20',
        to: '11:05'
      },
      second: {
        from: '',
        to: '',
      },
      third: {
        from: '',
        to: ''
      }
    })
  };

  function handleTimeSecond() {
    setTime({
      first: {
        from: '',
        to: ''
      },
      second: {
        from: '10:20',
        to: '12:05',
      },
      third: {
        from: '',
        to: ''
      }
    })
  };

  function handleTimeThird() {
    setTime({
      first: {
        from: '',
        to: ''
      },
      second: {
        from: '',
        to: '',
      },
      third: {
        from: '11:20',
        to: '13:05'
      }
    })
  };

  return (
    <div className={styles.info}>
      <div className={styles.flight}>
        {true ?
          <FlightRoute>
            <div className={styles.times}>
              <div
                className={time.first.from ? styles.timeClicked : styles.time}
                onClick={handleTimeFirst}
                >09:20 - 11:05</div>
              <div
                className={time.second.from ? styles.timeClicked : styles.time}
                onClick={handleTimeSecond}
                >10:20 - 12:05</div>
              <div
                className={time.third.from ? styles.timeClicked : styles.time}
                onClick={handleTimeThird}
                >11:20 - 13:05</div>
            </div>
          </FlightRoute>
        : 
          <>
            <FlightRoute children={null}/>
            <span className={styles.flightLine}/>
            <FlightRoute children={null}/>
          </>}
      </div>
      <div className={styles.price}>
        <p className={styles.priceText}>{4150}</p>
        <span>&#8381;</span>
      </div>
    </div>
  );
};
