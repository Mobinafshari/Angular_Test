import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'temp',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value;
  }
}
