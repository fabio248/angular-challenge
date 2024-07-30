import { TaskModel } from '../models/task.model';

export interface TaskState {
  loading: boolean;
  tasks: Array<TaskModel>;
}
