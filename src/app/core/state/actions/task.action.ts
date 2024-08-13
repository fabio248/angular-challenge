import { createAction, props } from '@ngrx/store';
import { TaskModel } from '../../models/task.model';
import { CreateTaskDto } from '../../dtos/create-task.dto';
import { UpdateTaskDto } from '../../dtos/update-task.dto';

export const loadTasks = createAction('[Task] Load Tasks');

export const loadedTasks = createAction(
  '[Task] Loaded Tasks',
  props<{ data: TaskModel[] }>(),
);

export const createTask = createAction(
  '[Task] Create Task',
  props<{ data: CreateTaskDto }>(),
);

export const createTaskLocal = createAction(
  '[Task] Create Task Local',
  props<{ data: TaskModel }>(),
);

export const createTaskSuccess = createAction(
  '[Task] Create Task Success',
  props<{ data: TaskModel }>(),
);

export const createTaskFailure = createAction(
  '[Task] Create Task Failure',
  props<{ error: string }>(),
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ id: string; data: UpdateTaskDto }>(),
);

export const updateTaskLocal = createAction(
  '[Task] Update Task Local',
  props<{ id: string; data: UpdateTaskDto }>(),
);

export const updateTaskSuccess = createAction(
  '[Task] Update Task Success',
  props<{ data: TaskModel }>(),
);

export const updateTaskFailure = createAction(
  '[Task] Update Task Failure',
  props<{ error: string }>(),
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: string }>(),
);

export const deleteTaskSuccess = createAction(
  '[Task] Delete Task Success',
  props<{ id: string }>(),
);

export const deleteTaskFailure = createAction(
  '[Task] Delete Task Failure',
  props<{ error: string }>(),
);
