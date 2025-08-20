import { Component } from '@angular/core';
import { USERS_LIST } from '../users-list';

const randomIndex = Math.floor(Math.random() * USERS_LIST.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  selectedUser = USERS_LIST[randomIndex];
}
