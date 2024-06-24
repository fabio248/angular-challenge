import { TaskState } from '../models/task.state';
import { ActionReducerMap } from '@ngrx/store';
import { tasksReducer } from '../../features/dashboard/state/task.reducer';

export interface AppState {
  itemsList: TaskState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  itemsList: tasksReducer,
};
