import styles from './Calendar.module.scss';

import React from 'react';
import { useAppSelector } from '@/app/hooks';

import { TaskElement } from '@/features/tasks';

import CalendarViewer from '../CalendarViewer';
import { CalendarViewSelect } from '../CalendarViewSelect';
import DateSelector from '../DateSelector/DateSelector';


export default function Calendar(): JSX.Element {
  const taskList = useAppSelector(state => state.tasks.taskList);
  const taskElements = taskList.map(task => (
    <TaskElement id={task.id} key={task.id} />
  ));

  return (
    <div className={ styles.calendar }>
      <div className={styles.topPanel}>
        <h1>YCalendar</h1>
        <DateSelector/>
        <CalendarViewSelect/>
      </div>
      <div className={styles.eventPanel}>
      </div>
      <div className={styles.viewPanel}>
        <CalendarViewer/>
      </div>
      <div className={styles.taskPanel}>
        <ul>
          { taskElements }
        </ul>
      </div>
    </div>
  );
}
