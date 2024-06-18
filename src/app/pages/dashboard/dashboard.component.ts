import { Component } from '@angular/core';
import { TaskCardComponent } from '../../shared/components/task-card/task-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
