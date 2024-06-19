import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AvatarComponent } from '../../../../core/components/avatar/avatar.component';
import { TimeTaskComponent } from '../time-task/time-task.component';
import { MatIcon } from '@angular/material/icon';
import { TagComponent } from '../tag/tag.component';
import { TaskI } from '../../../../core/interfaces';
import { TagListComponent } from '../tag-list/tag-list.component';

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
  @Input() card!: TaskI;
}
