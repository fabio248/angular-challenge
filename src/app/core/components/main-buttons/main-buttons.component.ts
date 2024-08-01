import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuItem } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';

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

  constructor(public router: Router) {
    this.openCreateTaskDialog();
  }

  openCreateTaskDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.panelClass = 'create-task-dialog';
    dialogConfig.width = '36rem';
    dialogConfig.height = '11.5rem';
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
