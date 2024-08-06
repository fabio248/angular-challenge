import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../models/task.model';
import { CreateTaskDto } from '../../dtos/create-task.dto';

export const loadTasks = createAction('[Task] Load Tasks');

export const loadedTasks = createAction(
  '[Task] Loaded Tasks',
  props<{ data: TaskModel[] }>(),
);

export const createTask = createAction(
  '[Task] Create Post',
  props<{ data: CreateTaskDto }>(),
);

export const createTaskSuccess = createAction(
  '[Task] Create Post Success',
  props<{ data: TaskModel }>(),
);

export const createTaskFailure = createAction(
  '[Task] Create Post Failure',
  props<{ error: string }>(),
);
