import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user.model';

export const loadUsers = createAction('[User] Load Users');

export const loadedUsers = createAction(
  '[User] Loaded Users',
  props<{ data: UserModel[] }>(),
);
