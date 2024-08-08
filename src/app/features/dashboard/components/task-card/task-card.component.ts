import { Component, inject, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AvatarComponent } from '../../../../core/components/avatar/avatar.component';
import { TimeTaskComponent } from '../time-task/time-task.component';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { TagComponent } from '../tag/tag.component';
import { TaskModel } from '../../../../core/models/task.model';
import { TagListComponent } from '../tag-list/tag-list.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../../../../core/components/create-task-dialog/create-task-dialog.component';
import { ConfirmDialogComponent } from '../../../../core/components/confirm-dialog/confirm-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/state/app.state';
import { deleteTask } from '../../../../core/state/actions/task.action';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AvatarComponent,
    TimeTaskComponent,
    MatIcon,
    TagComponent,
    TagListComponent,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
  ],
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent {
  readonly dialog = inject(MatDialog);
  readonly store: Store<AppState> = inject(Store);
  @Input() card!: TaskModel;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'clip',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clip.svg'),
    );
    iconRegistry.addSvgIcon(
      'comment',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/comment.svg'),
    );
    iconRegistry.addSvgIcon(
      'squares',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/squares.svg'),
    );
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'),
    );
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'),
    );
  }

  openEditTaskDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.panelClass = 'create-task-dialog';
    dialogConfig.width = '36rem';
    dialogConfig.data = this.card;
    this.dialog.open(CreateTaskDialogComponent, dialogConfig);
  }

  openDeleteTaskDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.panelClass = 'create-task-dialog';
    dialogConfig.width = '36rem';
    dialogConfig.data = {
      message: `Do you want to delete the task ${this.card.name}?`,
    };
    const deleteDialogRef = this.dialog.open(
      ConfirmDialogComponent,
      dialogConfig,
    );

    deleteDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(deleteTask({ id: this.card.id }));
      }
    });
  }
}
