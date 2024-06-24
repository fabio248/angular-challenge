import { TaskModel } from './task.model';

export interface TaskState {
  loading: boolean;
  tasks: ReadonlyArray<TaskModel>;
}
