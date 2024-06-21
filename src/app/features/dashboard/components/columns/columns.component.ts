import { Component, Input } from '@angular/core';
import { TaskI } from '../../../../core/interfaces';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.css',
})
export class ColumnsComponent {
  @Input() title: string = '';
  @Input() tasks: TaskI[] = [];
}
