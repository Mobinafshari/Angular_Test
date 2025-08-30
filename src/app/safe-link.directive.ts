import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('safe link directive is safe!');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantToLeave = window.confirm('Do you want to leave app?');
    if (wantToLeave) return;
    event.preventDefault();
  }
}
