import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {},
  reducers: {},
});

const calendarReducer = calendarSlice.reducer;

export default calendarSlice;

export {
  calendarReducer
};
