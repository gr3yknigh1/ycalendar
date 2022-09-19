import { combineReducers } from 'redux';

import { calendarReducer } from '@/features/calendar';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export default rootReducer;
