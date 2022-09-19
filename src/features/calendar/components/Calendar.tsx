import styles from './Calendar.module.scss';

import React, {
  useEffect,
  useState
} from 'react';

import { useAppSelector } from '@/app/hooks';
import { getDaysInMonthFromDate } from '@/utils';
import { TaskList } from '@/features/tasks';

import { getCells } from './Cell';
import { CalendarView } from '../calendarSlice';


interface CalendarViewerProps {
  calendarView: CalendarView;
}

function CalendarMonthView(): JSX.Element {
  const currentDate = useAppSelector(state => state.calendar.current);
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const daysCount = getDaysInMonthFromDate(new Date(currentDate));
    const cells = getCells(daysCount);
    setCells(cells);
  }, [currentDate]);

  return (
    <div className={styles['event-grid']}>
      { cells }
    </div>
  );
}

function CalendarViewer(props: CalendarViewerProps): JSX.Element {
  const { calendarView } = props;

  if (calendarView == 'MONTH')
    return (
      <CalendarMonthView/>
    );
  else {
    return (
      null
    );
  }
}

function CalendarStateInfo(): JSX.Element {

  const calendar = useAppSelector(state => state.calendar);
  return (
    <div>
      { calendar.timeZone }
      {' '}{ calendar.locale }
      {' '}{ calendar.current }
      {' '}{ calendar.view }
    </div>
  );
}

export default function Calendar() {

  return (
    <div className={ styles.calendar }>
      <div className={styles['top-panel']}>
        <CalendarStateInfo/>
      </div>
      <div className={styles['event-panel']}></div>
      <CalendarViewer calendarView='MONTH'/>
      <div className={styles['task-panel']}>
        <TaskList/>
      </div>
    </div>
  );
}
