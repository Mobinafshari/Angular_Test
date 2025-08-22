import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskType } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-user-task',
  imports: [Task, NewTask],
  templateUrl: './user-task.html',
  styleUrl: './user-task.scss',
})
export class UserTask {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask = false;
  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.id);
  }

  completeTask(completedId: string) {
    return this.taskService.removeTask(completedId);
  }
  onStartAddingTask() {
    this.isAddingTask = true;
  }
  onCloseAddingTask() {
    this.isAddingTask = false;
  }
  handleCompleteTask(values: NewTaskType) {
    this.taskService.addTask(values, this.id);
    this.isAddingTask = false;
  }
}
