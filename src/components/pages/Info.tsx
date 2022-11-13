import React, { memo, useContext, useState } from 'react';
import { ITime } from '../../interfaces/types';
import styles from '../../styles/Info.module.css';
import ChangeClock from '../ChangeClock';
import FlightRoute from '../FlightRoute';
import { Context } from '../RouteProvider';

export default memo(function Info() {
  const contextValue = useContext(Context);
  const [time, setTime] = useState<ITime>({
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
  const [clock, setClock] = useState<{from: string, to: string}>({
    from: '09:20',
    to: '11:05'
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
    });
    setClock({
      from: '09:20',
      to: '11:05'
    });
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
    });
    setClock({
      from: '10:20',
      to: '12:05',
    });
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
    });
    setClock({
      from: '11:20',
      to: '13:05'
    });
  };

  return (
    <div className={styles.info}>
      <div className={styles.flight}>
        {contextValue?.route.dateBack ?
          <>
            <FlightRoute
              children={null}
              cityFrom={contextValue.route.cityFrom}
              cityTo={contextValue.route.cityWhere}
              date={contextValue.route.dateThere}
              clockFrom={clock.from}
              clockTo={clock.to}/>
            <span className={styles.flightLine}/>
            <FlightRoute
              children={null}
              cityFrom={contextValue.route.cityWhere}
              cityTo={contextValue.route.cityFrom}
              date={contextValue.route.dateBack}
              clockFrom={clock.from}
              clockTo={clock.to}/>
            <span className={styles.flightLine}/>
          </>
        : 
          <>
          <FlightRoute
            cityFrom={contextValue?.route.cityFrom}
            cityTo={contextValue?.route.cityWhere}
            date={contextValue?.route.dateThere}
            clockFrom={clock.from}
            clockTo={clock.to}>
            <div className={styles.times}>
              <ChangeClock text={'09:20 - 11:05'} time={time.first.from} handleTime={handleTimeFirst}/>
              <ChangeClock text={'10:20 - 12:05'} time={time.second.from} handleTime={handleTimeSecond}/>
              <ChangeClock text={'11:20 - 13:05'} time={time.third.from} handleTime={handleTimeThird}/>
            </div>
          </FlightRoute>
          </>}
      </div>
      <div className={styles.price}>
        <p className={styles.priceText}>{contextValue?.route.dateBack ? 9300 : 4150}</p>
        <span>&#8381;</span>
      </div>
    </div>
  );
});
