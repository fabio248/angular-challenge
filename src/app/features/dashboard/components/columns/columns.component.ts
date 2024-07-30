import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Observable } from 'rxjs';
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
  @Input() tasks: Observable<TaskModel[]> = new Observable();
}
