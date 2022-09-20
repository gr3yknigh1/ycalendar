import styles from './CalendarView.module.scss';
import React, {
  useEffect,
  useState
} from 'react';
import classNames from 'classnames';

import { useAppSelector } from '@/app/hooks';
import { getDaysInMonthFromDate } from '@/utils';

import MonthCell from './MonthCell';


export function getCells(count: number) {
  return Array.from({length: count}, (_element, index) => (
    <MonthCell key={index} dateNumber={ index + 1 } />
  ));
}

export default function CalendarMonthView() {
  const currentDate = useAppSelector(state => state.calendar.currentDateISO);
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const daysCount = getDaysInMonthFromDate(new Date(currentDate));
    const cells = getCells(daysCount);

    setCells(cells);
  }, [currentDate]);

  return (
    <div className={classNames(styles.calendarView, styles.monthView)}>
      { cells }
    </div>
  );
}
