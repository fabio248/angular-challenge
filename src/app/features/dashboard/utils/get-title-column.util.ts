import { StatusTaskEnum } from '../../../core/models/task.model';

export const getTitleColumn = {
  [StatusTaskEnum.BACKLOG]: 'Backlog',
  [StatusTaskEnum.TODO]: 'Todo',
  [StatusTaskEnum.IN_PROGRESS]: 'Working',
  [StatusTaskEnum.DONE]: 'Completed',
  [StatusTaskEnum.CANCELLED]: 'Cancelled',
};
