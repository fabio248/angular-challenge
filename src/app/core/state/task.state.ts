import { TaskModel } from '../models/task.model';

export interface TaskState {
  loading: boolean;
  tasks: ReadonlyArray<TaskModel>;
}
