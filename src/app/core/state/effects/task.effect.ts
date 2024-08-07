import { TasksService } from '../../services/tasks.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TasksActions from '../actions/task.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskEffect {
  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
  ) {}

  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasks),
      switchMap(() =>
        this.tasksService
          .getTasks()
          .pipe(map((data) => TasksActions.loadedTasks({ data }))),
      ),
    ),
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.createTask),
      switchMap((action) =>
        this.tasksService.create(action.data).pipe(
          map((data) => TasksActions.createTaskSuccess({ data })),
          catchError((error) =>
            of(TasksActions.createTaskFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.updateTask),
      switchMap((action) =>
        this.tasksService.update(action.id, action.data).pipe(
          map((data) => TasksActions.updateTaskSuccess({ data })),
          catchError((error) =>
            of(TasksActions.updateTaskFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.deleteTask),
      switchMap((action) =>
        this.tasksService.delete(action.id).pipe(
          map(() => TasksActions.deleteTaskSuccess({ id: action.id })),
          catchError((error) =>
            of(TasksActions.deleteTaskFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );
}
