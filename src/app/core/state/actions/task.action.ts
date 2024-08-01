import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../models/task.model';

export const loadTasks = createAction('[Task] Load Tasks');

export const loadedTasks = createAction(
  '[Task] Loaded Tasks',
  props<{ data: TaskModel[] }>(),
);
