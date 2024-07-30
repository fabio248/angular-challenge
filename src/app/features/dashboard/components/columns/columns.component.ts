import { Component, Input } from '@angular/core';
import { StatusTaskEnum, TaskModel } from '../../../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [TaskCardComponent, AsyncPipe],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.css',
})
export class ColumnsComponent {
  @Input() title: string = '';
  @Input() typeTask!: StatusTaskEnum;
  @Input() tasks: Observable<TaskModel[]> = new Observable();
  totalTasks: Observable<number> = new Observable();

  constructor() {
    this.totalTasks = this.tasks.pipe(
      map(
        (tasks) => tasks.filter((task) => task.status === this.typeTask).length,
      ),
    );
  }
}
