import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalendarView, loadInitialState } from './calendarState';


export interface DateDelta {
  action: 'add' | 'subtract';
  amount: number;
  duration: 'd' | 'm';
}


const calendarSlice = createSlice({
  name: 'calendar',
  initialState: loadInitialState(),
  reducers: {
    setView: (state, action: PayloadAction<CalendarView>) => {
      state.view = action.payload;
    },
    applyDeltaToCurrentDate: (state, action: PayloadAction<DateDelta>) => {
      const delta = action.payload;
      const currentDate = new Date(state.currentDateISO);
      const modifier = delta.action === 'add' ? 1 : -1;

      if (delta.duration == 'm') {
        currentDate.setMonth(
          currentDate.getMonth() + delta.amount * modifier
        );
      } else {
        console.log('not implemented');
      }

      state.currentDateISO = currentDate.toISOString();
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
  applyDeltaToCurrentDate,
} = calendarSlice.actions;
