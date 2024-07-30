import { AppState } from '../../../core/state/app.state';
import { createSelector } from '@ngrx/store';

export const taskSelectors = (state: AppState) => state.tasksList;

export const selectListTasks = createSelector(
  taskSelectors,
  (state) => state.tasks,
);
export const selectLoadingTasks = createSelector(
  taskSelectors,
  (state) => state.loading,
);
