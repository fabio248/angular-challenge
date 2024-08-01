import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../services/users.service';
import { loadedUsers, loadUsers } from '../actions/user.action';
import { map, switchMap } from 'rxjs';

@Injectable()
export class UserEffect {
  constructor(
    private readonly actions$: Actions,
    private usersService: UsersService,
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usersService.getUsers().pipe(map((data) => loadedUsers({ data }))),
      ),
    ),
  );
}
