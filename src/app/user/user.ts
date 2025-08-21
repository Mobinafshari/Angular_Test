import { Component, computed, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // @Input({
  //   required: true,
  // })
  // image!: string;
  // @Input({
  //   required: true,
  // })
  // name!: string;

  image = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.image);
  // get imagePath() {
  //   return 'assets/users/' + this.image;
  // }
  onSelectUser() {}
}
