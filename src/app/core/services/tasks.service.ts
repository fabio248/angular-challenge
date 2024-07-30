import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<TaskModel[]>(`tasks`);
  }
}
