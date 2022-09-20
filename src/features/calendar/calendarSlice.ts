import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalendarView, loadInitialState } from './calendarState';


const calendarSlice = createSlice({
  name: 'calendar',
  initialState: loadInitialState(),
  reducers: {
    setView: (state, action: PayloadAction<CalendarView>) => {
      state.view = action.payload;
    }
  },
});

const calendarReducer = calendarSlice.reducer;

export default calendarSlice;

export {
  calendarReducer
};

export const {
  setView,
} = calendarSlice.actions;
