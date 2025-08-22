import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Output() handleClose = new EventEmitter<void>();
  @Output() handleSubmit = new EventEmitter<NewTaskType>();
  title = '';
  summary = '';
  date = '';
  onHandleClose() {
    this.handleClose.emit();
  }
  onHandleSubmitTask() {
    this.handleSubmit.emit({ title: this.title, summary: this.summary, dueDate: this.date });
    this.onHandleClose();
  }
}
