import { Component, OnInit, inject } from '@angular/core';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { StatusTaskEnum, TaskModel } from '../../core/models/task.model';
import { MatIcon } from '@angular/material/icon';
import { ColumnsComponent } from './components/columns/columns.component';
import { Store } from '@ngrx/store';
import {
  loadTasks,
  updateTask,
  updateTaskLocal,
} from '../../core/state/actions/task.action';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../core/state/app.state';
import {
  selectListTasks,
  selectLoadingAndEmptyTasks,
} from '../../core/state/selectors/task.selector';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonColumnsComponent } from './components/skeleton-columns/skeleton-columns.component';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';

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
    CdkDropListGroup,
    CdkDropList,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private store: Store<AppState> = inject(Store);
  tasks: Observable<TaskModel[]> = new Observable();
  loading: Observable<boolean> = new Observable();
  backlogTasks: TaskModel[] = [];
  todoTasks: TaskModel[] = [];
  workingTasks: TaskModel[] = [];
  completedTasks: TaskModel[] = [];
  cancelledTasks: TaskModel[] = [];

  async ngOnInit() {
    this.store.dispatch(loadTasks());
    this.tasks = this.store.select(selectListTasks);
    this.tasks.subscribe((tasks) => {
      this.backlogTasks = tasks.filter(
        (task) => task.status === StatusTaskEnum.BACKLOG,
      );
      this.todoTasks = tasks.filter(
        (task) => task.status === StatusTaskEnum.TODO,
      );
      this.workingTasks = tasks.filter(
        (task) => task.status === StatusTaskEnum.IN_PROGRESS,
      );
      this.completedTasks = tasks.filter(
        (task) => task.status === StatusTaskEnum.DONE,
      );
      this.cancelledTasks = tasks.filter(
        (task) => task.status === StatusTaskEnum.CANCELLED,
      );
    });
    this.loading = this.store.select(selectLoadingAndEmptyTasks);
  }

  protected readonly StatusTaskEnum = StatusTaskEnum;

  drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      return;
    }

    const task = event.previousContainer.data[event.previousIndex];
    const newStatus = event.container.id as StatusTaskEnum;

    // Update local state optimistically
    this.store.dispatch(
      updateTaskLocal({ id: task.id, data: { status: newStatus } }),
    );
    this.store.dispatch(
      updateTask({ id: task.id, data: { status: newStatus } }),
    );
  }
}
