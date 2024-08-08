import { StatusTaskEnum, TagsEnum } from '../models/task.model';

export interface CreateTaskDto {
  name: string;
  tags: TagsEnum[];
  status: StatusTaskEnum;
  assigneeId: string;
  dueDate: Date;
  pointEstimate: string;
}
