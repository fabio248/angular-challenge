import { TaskState } from './task.state';
import { ActionReducerMap } from '@ngrx/store';
import { tasksReducer } from './reducers/task.reducer';
import { UserState } from './user.state';
import { usersReducer } from './reducers/user.reducer';

export interface AppState {
  tasksList: TaskState;
  usersList: UserState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  tasksList: tasksReducer,
  usersList: usersReducer,
};
