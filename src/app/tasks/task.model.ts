export type TaskStatusType = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface TaskType {
  id: string;
  title: string;
  description: string;
  status: TaskStatusType;
}
