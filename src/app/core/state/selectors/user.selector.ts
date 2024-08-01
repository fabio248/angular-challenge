import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const userSelector = (state: AppState) => state.usersList;

export const selectListUsers = createSelector(
  userSelector,
  (state) => state.users,
);

export const selectLoadingUsers = createSelector(
  userSelector,
  (state) => state.loading,
);

export const selectLoadingAndEmptyUsers = createSelector(
  selectLoadingUsers,
  selectListUsers,
  (loading, users) => loading && users.length === 0,
);
