import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TagsEnum } from '../../../../core/interfaces';
import { getLabelTags } from '../../utils/get-label-tag.utils';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() tag!: TagsEnum;

  getColors() {
    switch (this.tag) {
      case TagsEnum.ANDROID:
        return 'bg-[#E5B4541A] text-tertiary-4';
      case TagsEnum.IOS:
        return 'bg-[#70B2521A] text-secondary-4';
      case TagsEnum.NODE_JS:
        return 'bg-[#3C873A1A] text-[#3C873A]';
      case TagsEnum.REACT:
        return 'bg-[#61DAFB1A] text-[#61DAFB]';
      case TagsEnum.RAILS:
        return 'bg-[#CC00001A] text-[#CC0000]';
      default:
        return 'bg-[#94979a1a1A] text-white';
    }
  }

  getLabel() {
    return getLabelTags(this.tag);
  }
}
