export interface UserI {
  id: string;
  fullName: string;
  email: string;
  type: string;
  avatar: string;
}

export enum TagsEnum {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  NODE_JS = 'NODE_JS',
  REACT = 'REACT',
  RAILS = 'RAILS',
}

export enum StatusTaskEnum {
  BACKLOG = 'BACKLOG',
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED',
}

export interface TaskI {
  id: string;
  name: string;
  tags: TagsEnum[];
  status: StatusTaskEnum;
  assignee: UserI;
  creator: UserI;
  dueDate: Date;
  pointEstimate: string;
  createdAt: Date;
}
