import { TasksService } from '../../services/tasks.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadedTasks, loadTasks } from '../actions/task.action';
import { map, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskEffect {
  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
  ) {}

  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        this.tasksService.getTasks().pipe(map((data) => loadedTasks({ data }))),
      ),
    ),
  );
}
