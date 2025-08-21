import { Component, Input } from '@angular/core';
import { Task } from "./task/task";

@Component({
  selector: 'app-user-task',
  imports: [Task],
  templateUrl: './user-task.html',
  styleUrl: './user-task.scss',
})
export class UserTask {
  @Input({ required: true }) name!: string;
}
