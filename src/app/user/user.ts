import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({
    required: true,
  })
  image!: string;
  @Input({
    required: true,
  })
  name!: string;
  @Output() select = new EventEmitter();
  get imagePath() {
    return 'assets/users/' + this.image;
  }
  onSelectUser() {
    this.select.emit();
  }
}
