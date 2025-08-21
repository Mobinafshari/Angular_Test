import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { USERS_LIST } from './users-list';
import { UserTask } from './user-task/user-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, UserTask],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
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
