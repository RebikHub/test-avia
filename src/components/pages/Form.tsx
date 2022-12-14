import React, { ChangeEvent, memo, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IHidden, IRoute } from '../../interfaces/types';
import styles from '../../styles/Form.module.css';
import { validateDate } from '../../utils/utils';
import Calendar from '../calendar/Calendar';
import { Context } from '../RouteProvider';
import Button from '../ui/button/Button';

export default memo(function Form() {
  const contextValue = useContext(Context);
  const navigate = useNavigate();
  const [route, setRoute] = useState<IRoute>({
    cityFrom: '',
    cityWhere: '',
    dateThere: '',
    dateBack: ''
  });
  const [disable, setDisable] = useState<boolean>(true);
  const [hidden, setHidden] = useState<IHidden>({
    there: 'none',
    back: 'none'
  });

  useEffect(() => {
    if (route.cityFrom && route.cityWhere && route.dateThere) {
      setDisable(false);
    };
  }, [route.cityFrom, route.cityWhere, route.dateThere]);

  function inputFromCity(e: ChangeEvent<HTMLInputElement>): void {
    setRoute({...route, cityFrom: e.target.value});
  };

  function inputWhereCity(e: ChangeEvent<HTMLInputElement>): void {
    setRoute({...route, cityWhere: e.target.value});
  };

  function inputThereDate(e: ChangeEvent<HTMLInputElement>): void {
    const date = validateDate(e.target.value);
    if (date) {
      setRoute({...route, dateThere: e.target.value});
    };
  };

  function inputBackDate(e: ChangeEvent<HTMLInputElement>): void {
    setRoute({...route, dateBack: e.target.value});
  };



  function calendarThere() {
    if (hidden.there === 'none') {
      setHidden({back: 'none', there: 'there'});
    } else {
      setHidden({...hidden, there: 'none'});
    };
  };

  function calendarBack() {
    if (hidden.back === 'none') {
      setHidden({there: 'none', back: 'back'});
    } else {
      setHidden({...hidden, back: 'none'});
    };
  };

  function getDateThere(date: string) {
    setRoute({...route, dateThere: date});
  };

  function getDateBack(date: string) {
    setRoute({...route, dateBack: date});
  };

  function submit() {
    contextValue?.saveRoute(route);
    navigate('/avia/info');
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <label>
          ????????????
          <input
            type='text'
            placeholder='?????????? ????????????'
            value={route.cityFrom}
            onChange={inputFromCity}
           />
        </label>

        <label>
          ????????
          <input
            type='text'
            placeholder='?????????? ??????????????'
            value={route.cityWhere}
            onChange={inputWhereCity}
          />
        </label>

        <label>
          ????????
          <input
            type='text'
            style={{paddingLeft: '36px'}}
            placeholder='????.????.????'
            value={route.dateThere}
            onChange={inputThereDate}
            onClick={calendarThere}
            />
          <span className={styles.image}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={route.dateThere ? "#5C87DB" : "#5C5C5C"} d="M12.6667 1.33333H12V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667V1.33333H5.33333V0.666667C5.33333 0.489856 5.2631 0.320286 5.13807 0.195262C5.01305 0.0702379 4.84348 0 4.66667 0C4.48986 0 4.32029 0.0702379 4.19526 0.195262C4.07024 0.320286 4 0.489856 4 0.666667V1.33333H3.33333C2.4496 1.33439 1.60237 1.68592 0.97748 2.31081C0.352588 2.93571 0.00105857 3.78294 0 4.66667L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V4.66667C15.9989 3.78294 15.6474 2.93571 15.0225 2.31081C14.3976 1.68592 13.5504 1.33439 12.6667 1.33333ZM1.33333 4.66667C1.33333 4.13623 1.54405 3.62753 1.91912 3.25245C2.29419 2.87738 2.8029 2.66667 3.33333 2.66667H12.6667C13.1971 2.66667 13.7058 2.87738 14.0809 3.25245C14.456 3.62753 14.6667 4.13623 14.6667 4.66667V5.33333H1.33333V4.66667ZM12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V6.66667H14.6667V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667Z"/>
            </svg>
          </span>
          <span className={styles.line}/>

          <Calendar
            none={hidden.there}
            getDateThere={getDateThere}
            getDateBack={getDateBack}
            />

        </label>

        <label>
          ??????????????
          <input
            type='text'
            style={{paddingLeft: '36px'}}
            placeholder='????.????.????'
            value={route.dateBack}
            onChange={inputBackDate}
            onClick={calendarBack}
            />
          <span className={styles.image}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={route.dateBack ? "#5C87DB" : "#5C5C5C"} d="M12.6667 1.33333H12V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667V1.33333H5.33333V0.666667C5.33333 0.489856 5.2631 0.320286 5.13807 0.195262C5.01305 0.0702379 4.84348 0 4.66667 0C4.48986 0 4.32029 0.0702379 4.19526 0.195262C4.07024 0.320286 4 0.489856 4 0.666667V1.33333H3.33333C2.4496 1.33439 1.60237 1.68592 0.97748 2.31081C0.352588 2.93571 0.00105857 3.78294 0 4.66667L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V4.66667C15.9989 3.78294 15.6474 2.93571 15.0225 2.31081C14.3976 1.68592 13.5504 1.33439 12.6667 1.33333ZM1.33333 4.66667C1.33333 4.13623 1.54405 3.62753 1.91912 3.25245C2.29419 2.87738 2.8029 2.66667 3.33333 2.66667H12.6667C13.1971 2.66667 13.7058 2.87738 14.0809 3.25245C14.456 3.62753 14.6667 4.13623 14.6667 4.66667V5.33333H1.33333V4.66667ZM12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V6.66667H14.6667V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667Z"/>
            </svg>
          </span>

          <Calendar
            none={hidden.back}
            getDateThere={getDateThere}
            getDateBack={getDateBack}
            />

        </label>
      </div>
      <div className={styles.button}>
        <Button
          type={'button'}
          text={'?????????? ????????????'}
          handleClick={submit}
          disabled={disable}
          />
      </div>
    </form>
  )
})
