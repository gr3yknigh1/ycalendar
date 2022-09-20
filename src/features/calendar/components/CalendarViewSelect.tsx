import React, { ChangeEvent, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { calendarViews, setView, CalendarView } from '@/features/calendar';


export function CalendarViewSelect() {
  const currentView = useAppSelector(state => state.calendar.view);
  const dispatch = useAppDispatch();

  const viewOptions = calendarViews.map((viewName, index) => (
    <option
      key={index}
    >
      {viewName}
    </option>
  ));

  const onChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setView(event.target.value as CalendarView));
  }, []);

  return (
    <div>
      <label>View: </label>
      <select
        onChange={onChange}
        defaultValue={calendarViews.indexOf(currentView)}
      >
        { viewOptions }
      </select>
    </div>
  );
}
