import { Component, OnInit, inject } from '@angular/core';
import { TaskCardComponent } from './components/task-card/task-card.component';
import {
  StatusTaskEnum,
  TagsEnum,
  TaskModel,
} from '../../core/models/task.model';
import { MatIcon } from '@angular/material/icon';
import { ColumnsComponent } from './components/columns/columns.component';
import { Store } from '@ngrx/store';
import { loadedTask, loadTask } from './state/task.actions';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskCardComponent, MatIcon, ColumnsComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private taskService = inject(TasksService);
  private store = inject(Store);
  tasks: TaskModel[] = [];

  async ngOnInit() {
    this.store.dispatch(loadTask());
    this.tasks = await this.taskService.getTasks();
    this.store.dispatch(loadedTask({ data: this.tasks }));
  }
}
