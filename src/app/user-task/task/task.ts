import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [Card , DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() task?: TaskType;
  @Output() completeTask = new EventEmitter<string>();
  handleCompleteTask() {
    this.completeTask.emit(this.task?.id);
  }
}
