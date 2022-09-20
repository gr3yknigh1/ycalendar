import { v4 } from 'uuid';


export default interface Task {
  id: string;
  name: string;
  isDone: boolean;
  description: string;
  dateISO?: string;
};

export function createTask(
  name: string,
  isDone = false,
  description = '',
  date?: Date,
): Task {
  const dateISO = date ? date.toISOString() : null;
  return { id: v4(), name, isDone, description, dateISO };
}
