import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>Child says: {{ message }}</p>`,
})
export class ChildComponent {
  @Input() message = '';
}
