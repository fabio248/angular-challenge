import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../../core/models/task.model';

export const loadTask = createAction('[Task] Load Task');

export const loadedTask = createAction(
  '[Task] Loaded Task',
  props<{ data: TaskModel[] }>(),
);
