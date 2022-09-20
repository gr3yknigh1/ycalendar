import React from 'react';
import { useAppSelector } from '@/app/hooks';


export default function CalendarStateInfo(): JSX.Element {
  const calendar = useAppSelector(state => state.calendar);
  return (
    <div>
      {calendar.timeZone}
      {' '}{calendar.locale}
      {' '}{calendar.currentDateISO}
      {' '}{calendar.view}
    </div>
  );
}
