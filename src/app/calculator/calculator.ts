import { Component, inject } from '@angular/core';
import { InputComponent } from '../shared/input/input';
import { FormsModule } from '@angular/forms';
import { ResultService } from '../service/resultService';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [InputComponent, FormsModule, CurrencyPipe],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  initial = '';
  annual = '';
  expected = '';
  duration = '';
  res: ResultType[] | null = null;
  private calc = inject(ResultService);
  handleForm() {
    this.res = this.calc.calculateInvestmentResults(
      +this.initial,
      +this.duration,
      +this.expected,
      +this.annual
    );
    this.initial = '';
    this.annual = '';
    this.expected = '';
    this.duration = '';
  }
}
