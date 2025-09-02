import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'onLog()',
  },
})
export class Log {
  private elementRef = inject(ElementRef);
  onLog() {
    console.log('Clicked');
    console.log(this.elementRef.nativeElement);
  }
}
