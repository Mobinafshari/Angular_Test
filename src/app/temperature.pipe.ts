import { output, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'temp',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
    let val: number;
    if (typeof value === 'string') {
      val = +value;
    } else {
      val = value;
    }
    let output: number;
    if (inputType === 'cel' && outputType === 'fah') {
      output = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      output = (val - 32) * (5 / 9);
    } else {
      output = val;
    }

    let symbol: '°F' | '°C';
    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }
    return `${output} ${symbol}`;
  }
}
