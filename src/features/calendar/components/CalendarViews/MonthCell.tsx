import styles from './MonthCell.module.scss';

import React from 'react';
import { useAppSelector } from '@/app/hooks';


function getDateForCell(date: number): Date {
  const currentDateISO = useAppSelector(state => state.calendar.currentDateISO);
  const currentDate = new Date(currentDateISO);
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
}

export default function MonthCell(props: { dateNumber: number; }): JSX.Element {
  const taskList = useAppSelector(state => state.tasks.taskList);
  const cellDate = getDateForCell(props.dateNumber);
  const cellTasks = taskList.filter(
    task => task.dateISO === cellDate.toISOString()
  );
  const cellTaskElements = cellTasks.map(
    task => <li
      className={styles.task}
      key={task.id}
    > { task.name } </li>
  );

  return (
    <div className={styles.cell}>
      <span className={styles.date}>{ props.dateNumber } </span>
      { cellTasks.length !== 0 && <ul>{cellTaskElements}</ul> }
    </div>
  );
}
