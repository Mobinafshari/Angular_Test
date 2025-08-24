import { Component } from '@angular/core';
import { InputComponent } from "../shared/input/input";

@Component({
  selector: 'app-calculator',
  imports: [InputComponent],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator {

}
