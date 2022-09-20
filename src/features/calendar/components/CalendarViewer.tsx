import React from 'react';
import { useAppSelector } from '@/app/hooks';

import {
  CalendarMonthView,
  NoView
} from './CalendarViews';


export default function CalendarViewer() {
  const view = useAppSelector(state => state.calendar.view);

  if (view == 'MONTH')
    return (
      <CalendarMonthView/>
    );
  else {
    return (
      <NoView></NoView>
    );
  }
}
