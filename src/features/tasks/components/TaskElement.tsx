import styles from './TaskElement.module.scss';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { toggle } from '../tasksSlice';


export default function TaskElement(props: { id: string}) {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector(state => state.tasks.taskList);

  const { id } = props;
  const { name, isDone } = taskList.find(task => task.id === id);

  const onClick = useCallback(() => {
    dispatch(toggle(id));
  }, [id]);

  return (
    <li
      className={ styles.taskElement }
      onClick={ onClick }
    >
      { isDone ? '[x]': '[ ]'} {name}
    </li>
  );
}
