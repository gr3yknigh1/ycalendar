import { combineReducers } from 'redux';

import { calendarReducer } from '@/features/calendar';
import { tasksReducer } from '@/features/tasks';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  tasks: tasksReducer,
});

export default rootReducer;
