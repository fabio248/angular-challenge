import { Component, Input } from '@angular/core';
import { TagsEnum } from '../../../../core/interfaces';
import { TagComponent } from '../tag/tag.component';
import { NgForOf, SlicePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { getLabelTags } from '../../utils/get-label-tag.utils';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [TagComponent, NgForOf, SlicePipe, MatTooltip],
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: TagsEnum[] = [];

  getLabelExtraTags() {
    let extraTags = '';

    this.tags.slice(2).forEach((tag) => {
      extraTags += getLabelTags(tag) + '\n';
    });

    return extraTags;
  }
}
