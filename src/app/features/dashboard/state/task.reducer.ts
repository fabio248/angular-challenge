import { createReducer, on } from '@ngrx/store';
import { loadedTask, loadTask } from './task.actions';
import { TaskState } from '../../../core/state/task.state';

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
  on(loadedTask, (state, { data }) => ({
    ...state,
    loading: false,
    tasks: data,
  })),
);
