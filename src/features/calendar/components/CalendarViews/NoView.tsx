import styles from './CalendarView.module.scss';
import React from 'react';
import { useAppSelector } from '@/app/hooks';

export default function NoView() {
  const view = useAppSelector(state => state.calendar.view);

  return (
    <div
      className={styles.calendarView}
    >
      No view found: { view }
    </div>
  );
}
