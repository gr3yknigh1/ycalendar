export interface CalendarEvent {
  name: string;
}

export type CalendarView = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
export const calendarViews = [
  'DAY',
  'WEEK',
  'MONTH',
  'YEAR'
];

// TODO(gr3yknigh1): check timezone & locale & format validity and add field
// to state
interface CalendarState {
  timeZone: string;
  locale: string;

  currentDateISO: string;

  view: CalendarView;
  events: CalendarEvent[];
}

export default CalendarState;

export function loadInitialState(): CalendarState {
  const resolvedOptions = Intl.DateTimeFormat().resolvedOptions();

  return {
    timeZone: resolvedOptions.timeZone,
    locale: resolvedOptions.locale,

    currentDateISO: new Date(2022, 9, 19).toISOString(),

    view: 'MONTH',
    events: [],
  };
}
