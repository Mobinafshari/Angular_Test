import { Injectable } from '@angular/core';
import { TaskStatusType, TaskType } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: TaskType[] = [];
  addTask(task: Pick<TaskType, 'title' | 'description'>) {
    this.tasks.push({ ...task, id: new Date().getDate().toString(), status: 'OPEN' });
  }
  updateTaskStatus(id: string, status: TaskStatusType) {
    this.tasks.map((task) => (task.id === id ? { ...task, status } : task));
  }
}
