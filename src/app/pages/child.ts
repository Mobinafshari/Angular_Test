import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>Child says: {{ message }}</p>
    <input type="text" placeholder="enter your name here" (input)="handleInputChange($event)" />
    @if(isAdmin){
    <p>You are Admin</p>
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
  handleInputChange(e: any) {
    this.updateName(e.target.value);
  }
}
