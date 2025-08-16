import { Component, Input } from '@angular/core';

@Component({
  selector: 'typography',
  template: ` <h1>{{ text }}<ng-content></ng-content></h1> `,
  standalone: true,
  styles: [
    `
      h1 {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-color);
      }
    `,
  ],
})
export class TypographyComponent {
  @Input() text: string = '';
}
