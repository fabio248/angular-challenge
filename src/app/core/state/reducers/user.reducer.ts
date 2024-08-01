import { createReducer, on } from '@ngrx/store';
import { UserState } from '../user.state';
import { loadedUsers, loadUsers } from '../actions/user.action';

export const usersInitialState: UserState = {
  loading: false,
  users: [],
};

export const usersReducer = createReducer(
  usersInitialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadedUsers, (state, { data }) => ({
    ...state,
    loading: false,
    users: data,
  })),
);
