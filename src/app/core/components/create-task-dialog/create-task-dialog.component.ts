import { Component, inject, model } from '@angular/core';
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
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-task-dialog.component.html',
  styleUrl: './create-task-dialog.component.css',
})
export class CreateTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTaskDialogComponent>);

  close(): void {
    this.dialogRef.close();
  }

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
  }

  addTag(event: MouseEvent): void {
    event.stopPropagation();
  }
}
