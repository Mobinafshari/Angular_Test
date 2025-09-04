import { inject, Injectable } from '@angular/core';
import { TaskStatusType, TaskType } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: TaskType[] = [];
  private loggingService = inject(LoggingService);
  addTask(task: Pick<TaskType, 'title' | 'description'>) {
    this.tasks.push({ ...task, id: new Date().getDate().toString(), status: 'OPEN' });
    this.loggingService.log('ADDED TASK WITH TITLE'+ task.title);
  }
  updateTaskStatus(id: string, status: TaskStatusType) {
    this.tasks.map((task) => (task.id === id ? { ...task, status } : task));
    this.loggingService.log('CHANGED TASK STATUS' + status);

  }
}
