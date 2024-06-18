import { TagsEnum } from '../interfaces';

export function getLabelTags(tag: TagsEnum) {
  switch (tag) {
    case TagsEnum.ANDROID:
      return 'ANDROID';
    case TagsEnum.IOS:
      return 'IOS APP';
    case TagsEnum.NODE_JS:
      return 'NODE JS';
    case TagsEnum.REACT:
      return 'REACT';
    case TagsEnum.RAILS:
      return 'RAILS';
    default:
      return tag;
  }
}
