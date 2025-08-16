import { Component, inject, Input } from '@angular/core';
import { UserService } from '../stores/shareService';
import { TypographyComponent } from '../components/typography';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [TypographyComponent],
  styleUrl: './child.scss',
  template: `<p>Child says: {{ message }}</p>
    <input
      class="input"
      type="text"
      placeholder="enter your name here"
      (input)="handleInputChange($event)"
    />
    @if(isAdmin){
    <typography text="You are Admin :"> {{ storeName }}</typography>
    }@else{
    <p>Normal User = {{ name }}</p>
    }
    <button (click)="handleClick()">I am not admin</button>`,
})
export class ChildComponent {
  @Input() message = '';
  name = '';
  age = 0;
  isAdmin = true;
  private shareName = inject(UserService);
  storeName = this.shareName.name;
  updateInfos({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
  }
  updateName(name: string) {
    this.name = name;
  }
  handleClick() {
    this.isAdmin = false;
  }
  handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.updateName(target.value);
  }
}
