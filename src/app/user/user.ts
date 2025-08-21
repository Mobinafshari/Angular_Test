import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
type UserType = {
  id: string;
  image: string;
  name: string;
};
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() user!: UserType;
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.image;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
