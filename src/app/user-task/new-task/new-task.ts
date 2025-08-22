import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() handleClose = new EventEmitter<void>();
  private tasksService = inject(TasksService);
  title = '';
  summary = '';
  date = '';
  onHandleClose() {
    this.handleClose.emit();
  }
  onHandleSubmitTask() {
    this.tasksService.addTask(
      {
        dueDate: this.date,
        summary: this.summary,
        title: this.title,
      },
      this.userId
    );
    this.handleClose.emit();
  }
}
