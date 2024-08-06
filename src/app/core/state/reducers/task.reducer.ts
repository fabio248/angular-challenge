import { createReducer, on } from '@ngrx/store';
import * as TasksActions from '../actions/task.action';
import { TaskState } from '../task.state';

export const taskInitialState: TaskState = {
  loading: false,
  tasks: [],
  error: null,
};

export const tasksReducer = createReducer(
  taskInitialState,
  on(TasksActions.loadTasks, (state) => ({
    ...state,
    loading: true,
  })),
  on(TasksActions.loadedTasks, (state, { data }) => ({
    ...state,
    loading: false,
    tasks: data,
  })),
  on(TasksActions.createTaskSuccess, (state, { data }) => ({
    ...state,
    tasks: [...state.tasks, data],
  })),
  on(TasksActions.createTaskFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
);
