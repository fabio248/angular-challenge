import { UserModel } from '../models/user.model';

export interface UserState {
  loading: boolean;
  users: Array<UserModel>;
}
