import { Component, OnInit, inject } from '@angular/core';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { StatusTaskEnum, TaskModel } from '../../core/models/task.model';
import { MatIcon } from '@angular/material/icon';
import { ColumnsComponent } from './components/columns/columns.component';
import { Store } from '@ngrx/store';
import { loadTask } from './state/task.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../core/state/app.state';
import {
  selectListTasks,
  selectLoadingAndEmptyTasks,
} from './state/task.selectors';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonColumnsComponent } from './components/skeleton-columns/skeleton-columns.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskCardComponent,
    MatIcon,
    ColumnsComponent,
    AsyncPipe,
    SkeletonModule,
    SkeletonColumnsComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private store: Store<AppState> = inject(Store);
  tasks: Observable<TaskModel[]> = new Observable();
  loading: Observable<boolean> = new Observable();

  async ngOnInit() {
    this.store.dispatch(loadTask());
    this.tasks = this.store.select(selectListTasks);
    this.loading = this.store.select(selectLoadingAndEmptyTasks);
  }

  protected readonly StatusTaskEnum = StatusTaskEnum;
}
