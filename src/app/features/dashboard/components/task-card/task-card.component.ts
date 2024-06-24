import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AvatarComponent } from '../../../../core/components/avatar/avatar.component';
import { TimeTaskComponent } from '../time-task/time-task.component';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { TagComponent } from '../tag/tag.component';
import { TaskModel } from '../../../../core/models/task.model';
import { TagListComponent } from '../tag-list/tag-list.component';
import { DomSanitizer } from '@angular/platform-browser';

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
  ],
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent {
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
  }
}
