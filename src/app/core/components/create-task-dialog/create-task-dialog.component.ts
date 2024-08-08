import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
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
import { StatusTaskEnum, TaskModel } from '../../models/task.model';
import { getLabelTags } from '../../../features/dashboard/utils/get-label-tag.utils';
import { createTask, updateTask } from '../../state/actions/task.action';

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
    @Inject(MAT_DIALOG_DATA) public data?: TaskModel,
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
      name: new FormControl(data?.name || '', Validators.required),
      tags: new FormControl(data?.tags || [], Validators.required),
      status: new FormControl(
        data?.status || StatusTaskEnum.TODO,
        Validators.required,
      ),
      pointEstimate: new FormControl(data?.pointEstimate, Validators.required),
      assigneeId: new FormControl(data?.assignee.id, Validators.required),
      dueDate: new FormControl(data?.dueDate, Validators.required),
      assigneeAvatar: new FormControl(data?.assignee.avatar || ''),
      assigneeName: new FormControl(data?.assignee.fullName || ''),
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

  isTagSelected(tag: string): boolean {
    const tags = this.addForm.get('tags')?.value || [];
    return tags.includes(tag);
  }

  submit() {
    if (this.addForm.invalid) {
      return;
    }

    const bodyRequest = { ...this.addForm.value };
    delete bodyRequest.assigneeAvatar;
    delete bodyRequest.assigneeName;

    if (this.isEditMode) {
      this.store.dispatch(updateTask({ id: this.data!.id, data: bodyRequest }));
    } else {
      this.store.dispatch(createTask({ data: bodyRequest }));
    }

    this.addForm.reset();
    this.close();
  }

  get isEditMode() {
    return !!this.data;
  }
}
