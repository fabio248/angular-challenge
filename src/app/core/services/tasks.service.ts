import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<TaskModel[]>(`tasks`);
  }

  create(task: CreateTaskDto) {
    return this.http.post<TaskModel>(`tasks`, task);
  }
}
