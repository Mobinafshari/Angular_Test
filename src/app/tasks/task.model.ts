import { InjectionToken, Provider } from '@angular/core';

export type TaskStatusType = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface TaskType {
  id: string;
  title: string;
  description: string;
  status: TaskStatusType;
}
export const TASK_STATUS_OPTIONS = new InjectionToken<{
  value: string;
  taskStatus: TaskStatusType;
  text: string;
}>('task-status-options');
export const taskStatusOptions: { value: string; taskStatus: TaskStatusType; text: string }[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
];

export const taskStatusProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: taskStatusOptions,
};
