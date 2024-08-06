export interface CreateTaskDto {
  name: string;
  tags: string[];
  status: string;
  assigneeId: string;
  dueDate: Date;
  pointEstimate: string;
}
