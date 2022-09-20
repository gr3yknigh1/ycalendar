import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Task, { createTask } from './task';


export interface TasksState {
  taskList: Task[];
}

function loadInitialState(): TasksState {
  return {
    taskList: [
      createTask('Wash dishes'),
      createTask('Make blowjob', true),
      createTask('Task with very load name and useful description', false, null, new Date(2022, 9, 19))
    ]
  };
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadInitialState(),
  reducers: {
    push: (state, action: PayloadAction<Task>) => {
      state.taskList = [
        ...state.taskList,
        action.payload
      ];
    },
    toggle: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.map((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone;
        }
        return task;
      });
    }
  },
});

const tasksReducer = tasksSlice.reducer;
export const {
  push,
  toggle,
} = tasksSlice.actions;

export default tasksSlice;
export { tasksReducer };
