import { createSlice } from '@reduxjs/toolkit';

export interface CalendarEvent {
  name: string;
}

export type CalendarView = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'

// TODO(gr3yknigh1): check timezone & locale & format validity and add field
// to state
export interface CalendarState {
  timeZone: string;
  locale: string;

  current: string;

  view: CalendarView;
  events: CalendarEvent[];
}


function loadInitialState(): CalendarState {
  const resolvedOptions = Intl.DateTimeFormat().resolvedOptions();

  return {
    timeZone: resolvedOptions.timeZone,
    locale: resolvedOptions.locale,

    current: new Date(2022, 2, 1).toISOString(),

    view: 'MONTH',
    events: []
  };
}


const calendarSlice = createSlice({
  name: 'calendar',
  initialState: loadInitialState(),
  reducers: {},
});

const calendarReducer = calendarSlice.reducer;

export default calendarSlice;

export {
  calendarReducer
};
