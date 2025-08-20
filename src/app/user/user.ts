import { Component, computed, signal } from '@angular/core';
import { USERS_LIST } from '../users-list';

const randomIndex = Math.floor(Math.random() * USERS_LIST.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  selectedUser = signal(USERS_LIST[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().image);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.image;
  // }
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * USERS_LIST.length);
    this.selectedUser.set(USERS_LIST[randomIndex]);
  }
}
