import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'button[pr-submit]',
  template: `<button type="submit" (click)="handleClick?.()"><ng-content></ng-content></button>`,
  styles: [
    `
      button {
        padding: 8px 16px;
        border-radius: 8px;
        outline: none;
        background-color: var(--primary-color);
        opacity: 0.8;
      }
    `,
  ],
})
export class SubmitButton {
  @Input() handleClick: (() => void) | undefined = undefined;
}
