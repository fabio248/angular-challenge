import { createReducer, on } from '@ngrx/store';
import { loadTask } from './task.actions';
import { TaskState } from '../../../core/models/task.state';

export const taskInitialState: TaskState = {
  loading: false,
  tasks: [],
};

export const tasksReducer = createReducer(
  taskInitialState,
  on(loadTask, (state) => ({
    ...state,
    loading: true,
  })),
);
