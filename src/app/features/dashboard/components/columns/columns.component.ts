import { Component, Input, OnInit } from '@angular/core';
import { StatusTaskEnum, TaskModel } from '../../../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { getTitleColumn } from '../../utils/get-title-column.util';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [TaskCardComponent, AsyncPipe],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.css',
})
export class ColumnsComponent implements OnInit {
  @Input() statusTask!: StatusTaskEnum;
  @Input() tasks: Observable<TaskModel[]> = new Observable();
  title: string = '';
  totalTasks: Observable<number> = new Observable();

  ngOnInit() {
    this.totalTasks = this.tasks.pipe(
      map(
        (tasks) =>
          tasks.filter((task) => task.status === this.statusTask).length,
      ),
    );
    this.title = getTitleColumn[this.statusTask];
  }
}
