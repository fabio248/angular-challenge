import { Injectable } from '@angular/core';
import axios from '../utils/axios.config';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  async getTasks() {
    const response = await axios.get<TaskModel[]>('/tasks');

    return response.data;
  }
}
