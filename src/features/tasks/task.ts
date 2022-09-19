import { v4 } from 'uuid';


export default interface Task {
  id: string;
  name: string;
  isDone: boolean;
  description: string;
}

export function createTask(
  name: string,
  isDone = false,
  description = ''
): Task {
  return { id: v4(), name, isDone, description };
}
