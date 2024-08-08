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
  on(TasksActions.updateTaskSuccess, (state, { data }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === data.id ? { ...task, ...data } : task,
    ),
  })),
  on(TasksActions.updateTaskFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(TasksActions.deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(TasksActions.deleteTaskFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(TasksActions.updateTaskLocal, (state, { id, data }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, ...data } : task,
    ),
  })),
);
