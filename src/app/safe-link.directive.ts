import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  @Input({ alias: 'appSafeLink' }) queryParam: string = 'myApp';
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('safe link directive is safe!');
  }
  onConfirmLeavePage(event: MouseEvent) {
    const wantToLeave = window.confirm('Do you want to leave app?');
    if (wantToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam;
      return;
    }
    event.preventDefault();
  }
}
