import { TaskState } from './task.state';
import { ActionReducerMap } from '@ngrx/store';
import { tasksReducer } from '../../features/dashboard/state/task.reducer';

export interface AppState {
  tasksList: TaskState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  tasksList: tasksReducer,
};
