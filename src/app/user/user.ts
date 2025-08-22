import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { UserType } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.image;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
