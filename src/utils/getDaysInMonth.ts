
export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export function getDaysInMonthFromDate(date: Date): number {
  return getDaysInMonth(date.getMonth(), date.getFullYear());
}
