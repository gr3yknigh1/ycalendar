import React, { useCallback } from 'react';
import { useAppSelector } from '@/app/hooks';

import { TaskElement } from './TaskElement';


export default function TaskList() {
  const taskList = useAppSelector(state => state.tasks.taskList);

  const getTaskElements = useCallback(() => {
    return taskList.map((task) => (
      <TaskElement key={ task.id } id={ task.id }/>
    ));
  }, []);

  return (
    <ul>
      { getTaskElements() }
    </ul>
  );
}
