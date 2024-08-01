import { createReducer, on } from '@ngrx/store';
import { loadedTasks, loadTasks } from '../actions/task.action';
import { TaskState } from '../task.state';

export const taskInitialState: TaskState = {
  loading: false,
  tasks: [],
};

export const tasksReducer = createReducer(
  taskInitialState,
  on(loadTasks, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadedTasks, (state, { data }) => ({
    ...state,
    loading: false,
    tasks: data,
  })),
);
