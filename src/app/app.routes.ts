import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MyTaskComponent } from './features/my-task/my-task.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'my-task',
    title: 'My Task',
    component: MyTaskComponent,
  },
];
