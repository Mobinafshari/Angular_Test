import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.scss',
})
export class NewTicket implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string; request: string }>();

  handleForm(request: string, title: string) {
    this.add.emit({ request, title });
    this.form?.nativeElement.reset();
  }
  ngAfterViewInit() {
    console.log('after view init');
  }
}
