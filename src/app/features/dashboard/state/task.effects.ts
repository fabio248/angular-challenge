import { TasksService } from '../../../core/services/tasks.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadedTask, loadTask } from './task.actions';
import { map, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
  ) {}

  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTask),
      switchMap(() =>
        this.tasksService.getTasks().pipe(map((data) => loadedTask({ data }))),
      ),
    ),
  );
}
