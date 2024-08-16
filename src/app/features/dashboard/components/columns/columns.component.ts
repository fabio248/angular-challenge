import { Component, Input, OnInit } from '@angular/core';
import { StatusTaskEnum, TaskModel } from '../../../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { AsyncPipe } from '@angular/common';
import { getTitleColumn } from '../../utils/get-title-column.util';
import { CdkDrag, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [TaskCardComponent, AsyncPipe, CdkDrag],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.scss',
})
export class ColumnsComponent implements OnInit {
  @Input() statusTask!: StatusTaskEnum;
  @Input() tasks: TaskModel[] = [];
  title: string = '';
  totalTasks: number = 0;

  ngOnInit() {
    this.totalTasks = this.tasks.length;
    this.title = getTitleColumn[this.statusTask];
  }

  dragStarted(event: CdkDragStart<TaskModel[]>) {
    const task = event.source.data;
    const container = event.source.dropContainer;
    const index = container.data.indexOf(task);
    if (index > -1) {
      container.data.splice(index, 1);
    }
  }
}
