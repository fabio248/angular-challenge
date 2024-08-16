import { Component, inject, OnInit } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { Observable } from 'rxjs';
import { TaskModel } from '../../core/models/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { loadTasks } from '../../core/state/actions/task.action';
import { selectListTasks } from '../../core/state/selectors/task.selector';
import { TimeTaskComponent } from '../dashboard/components/time-task/time-task.component';
import { TagListComponent } from '../dashboard/components/tag-list/tag-list.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';

@Component({
  selector: 'app-my-task',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    TimeTaskComponent,
    TagListComponent,
    TableHeaderComponent,
  ],
  templateUrl: './my-task.component.html',
  styleUrl: './my-task.component.scss',
})
export class MyTaskComponent implements OnInit {
  readonly store: Store<AppState> = inject(Store);
  displayedColumns: string[] = ['name', 'tags', 'pointEstimate', 'dueDate'];
  task: Observable<TaskModel[]> = new Observable();
  dataSource: TaskModel[] = [];
  myTask: TaskModel[] = [];

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.task = this.store.select(selectListTasks);

    this.task.subscribe((tasks) => {
      this.myTask = tasks.filter(
        (task) => task.assignee.fullName === 'Fabio Flores',
      );

      this.dataSource = this.myTask;
      console.log(this.myTask);
    });
  }
}
