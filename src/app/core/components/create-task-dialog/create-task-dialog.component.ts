import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { StatusTaskEnum } from '../../models/task.model';
import { getLabelTags } from '../../../features/dashboard/utils/get-label-tag.utils';
import { createTask } from '../../state/actions/task.action';

@Component({
  selector: 'app-create-task-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatInput,
    MatDialogActions,
    MatDialogClose,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIcon,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    AvatarLabelComponent,
    AsyncPipe,
    ReactiveFormsModule,
    DatePipe,
    NgClass,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-task-dialog.component.html',
  styleUrl: './create-task-dialog.component.css',
})
export class CreateTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTaskDialogComponent>);
  readonly store: Store<AppState> = inject(Store);
  readonly addForm: FormGroup;
  users: Observable<UserModel[]> = new Observable();

  constructor(
    readonly iconRegistry: MatIconRegistry,
    readonly sanitizer: DomSanitizer,
    readonly fb: FormBuilder,
  ) {
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
    this.addForm = fb.group({
      name: new FormControl('', Validators.required),
      tags: new FormControl([], Validators.required),
      status: new FormControl(StatusTaskEnum.TODO, Validators.required),
      pointEstimate: new FormControl(null, Validators.required),
      assigneeId: new FormControl(null, Validators.required),
      dueDate: new FormControl('', Validators.required),
      assigneeAvatar: new FormControl(''),
      assigneeName: new FormControl(''),
    });
  }

  addTag(event: Event): void {
    const input = event.target as HTMLInputElement;
    const tags = this.addForm.get('tags')?.value || [];

    if (input.checked) {
      if (!tags.includes(input.value)) {
        tags.push(input.value);
      }
    } else {
      const index = tags.indexOf(input.value);
      if (index > -1) {
        tags.splice(index, 1);
      }
    }

    this.addForm.patchValue({ tags });
  }

  addPointEstimate(value: number) {
    this.addForm.patchValue({ pointEstimate: value });
  }

  addAssigneeId(input: {
    assigneeId: string;
    assigneeAvatar: string;
    assigneeName: string;
  }) {
    this.addForm.patchValue(input);
  }

  getValueForm(prop: string) {
    return this.addForm.get(prop)?.value;
  }

  close(): void {
    this.dialogRef.close();
  }

  getLabelTag() {
    return getLabelTags(this.addForm.get('tags')?.value[0]);
  }

  submit() {
    if (this.addForm.invalid) {
      return;
    }

    const data = { ...this.addForm.value };
    delete data.assigneeAvatar;
    delete data.assigneeName;

    this.store.dispatch(createTask({ data }));
    this.addForm.reset();
    this.close();
  }
}
