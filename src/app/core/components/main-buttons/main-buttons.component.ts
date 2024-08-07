import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuItem } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { loadUsers } from '../../state/actions/user.action';

@Component({
  selector: 'app-main-buttons',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatMenuItem,
    MatIconModule,
    MatMiniFabButton,
  ],
  templateUrl: './main-buttons.component.html',
})
export class MainButtonsComponent {
  readonly dialog = inject(MatDialog);
  readonly store: Store<AppState> = inject(Store);

  constructor(public router: Router) {
    this.store.dispatch(loadUsers());
  }

  openCreateTaskDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.panelClass = 'create-task-dialog';
    dialogConfig.width = '36rem';
    dialogConfig.data = null;
    this.dialog.open(CreateTaskDialogComponent, dialogConfig);
  }
}
