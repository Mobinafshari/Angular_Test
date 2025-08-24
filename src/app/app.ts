import { Component, signal } from '@angular/core';
import { USERS_LIST } from './users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class App {
  protected readonly title = signal('Angular-Test');
  users = USERS_LIST;

  selectedId?: string;
  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedId)?.name;
  }
  onSelectUser(id: string) {
    this.selectedId = id;
  }
}
