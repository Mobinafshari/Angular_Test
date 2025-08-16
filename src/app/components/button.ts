import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'button[pr-submit]',
  host: {
    '(click)': 'handleClick?.()',
    '[attr.type]': '"submit"',
  },
  template: `
    <ng-content></ng-content>
    @if(label) {
    <p>{{ label }}</p>
    }
  `,
  styles: [
    `
      :host {
        padding: 8px 16px;
        border-radius: 8px;
        outline: none;
        background-color: var(--primary-color);
        opacity: 0.8;
        border: none;
        cursor: pointer;
      }

      :host(:disabled) {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ],
})
export class SubmitButton {
  @Input() handleClick?: () => void;
  @Input() label?: string;
}
