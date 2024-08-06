import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const taskSelector = (state: AppState) => state.tasksList;

export const selectListTasks = createSelector(
  taskSelector,
  (state) => state.tasks,
);
export const selectLoadingTasks = createSelector(
  taskSelector,
  (state) => state.loading,
);

export const selectLoadingAndEmptyTasks = createSelector(
  selectLoadingTasks,
  selectListTasks,
  (loading, tasks) => loading && tasks.length === 0,
);

export const selectErrorTasks = createSelector(
  taskSelector,
  (state) => state.error,
);
