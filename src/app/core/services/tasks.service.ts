import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<TaskModel[]>(`tasks`);
  }

  create(createTaskDto: CreateTaskDto) {
    return this.http.post<TaskModel>(`tasks`, createTaskDto);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.http.put<TaskModel>(`tasks/${id}`, updateTaskDto);
  }

  delete(id: string) {
    return this.http.delete<TaskModel>(`tasks/${id}`);
  }
}
