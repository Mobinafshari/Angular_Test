import { Component } from '@angular/core';
import { InputComponent } from '../shared/input/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [InputComponent, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  initial = '';
  annual = '';
  expected = '';
  duration = '';
  handleForm() {
    console.log(this.annual, this.initial, this.expected, this.duration);
  }
}
