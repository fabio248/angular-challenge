import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AvatarLabelComponent } from '../avatar-label/avatar-label.component';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectListUsers } from '../../state/selectors/user.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-create-task-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    FormsModule,
    MatInput,
    MatDialogActions,
    MatDialogClose,
    MatLabel,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIcon,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    AvatarLabelComponent,
    AsyncPipe,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-task-dialog.component.html',
  styleUrl: './create-task-dialog.component.css',
})
export class CreateTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTaskDialogComponent>);
  readonly store: Store<AppState> = inject(Store);
  users: Observable<UserModel[]> = new Observable();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'estimate',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/estimate.svg'),
    );
    iconRegistry.addSvgIcon(
      'user',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'),
    );
    iconRegistry.addSvgIcon(
      'label',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/label.svg'),
    );
    iconRegistry.addSvgIcon(
      'calendar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/calendar.svg'),
    );
    this.users = this.store.select(selectListUsers);
    this.users.subscribe((users) => {
      console.log(users);
    });
  }

  addTag(event: MouseEvent): void {
    event.stopPropagation();
  }

  close(): void {
    this.dialogRef.close();
  }
}
