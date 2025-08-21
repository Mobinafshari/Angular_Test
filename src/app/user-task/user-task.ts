import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-task',
  imports: [],
  templateUrl: './user-task.html',
  styleUrl: './user-task.scss',
})
export class UserTask {
  @Input({ required: true }) name!: string;
}
