import styles from './DateSelector.module.scss';
import { useAppSelector } from '@/app/hooks';
import React, { FormEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { applyDeltaToCurrentDate } from '@/features/calendar/calendarSlice';


export default function DateSelector() {
  const view = useAppSelector(state => state.calendar.view);
  const currentDate = new Date(
    useAppSelector(state => state.calendar.currentDateISO)
  );
  const dispatch = useDispatch();

  const onFormSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);


  if (view === 'MONTH') {
    currentDate.setMonth(currentDate.getMonth() - 1);
    const monthLabel = currentDate.toLocaleString('en-US', {
      month: 'long'
    });
    return (
      <form
        onSubmit={onFormSubmit}
      >
        <button
          className={styles.selectButton}
          onClick={() => { dispatch(applyDeltaToCurrentDate({
            action: 'subtract',
            amount: 1,
            duration: 'm',
          })); }}
        > {'<'} </button>
        <label> { monthLabel } </label>
        <button
          className={styles.selectButton}
          onClick={() => { dispatch(applyDeltaToCurrentDate({
            action: 'add',
            amount: 1,
            duration: 'm',
          })); }}
        > {'>'} </button>
      </form>
    );
  } else {
    return (
      <div>DateSelector</div>
    );
  }

}
