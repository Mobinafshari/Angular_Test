import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { USERS_LIST } from './users-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('Angular-Test');
  users = USERS_LIST;

  onSelectUser(id:string){
    console.log('Clicked on user' + id)
  }
}
