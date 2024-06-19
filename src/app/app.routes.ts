import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { MyTaskComponent } from './features/my-task/my-task.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'my-task',
        component: MyTaskComponent,
      },
    ],
  },
];
