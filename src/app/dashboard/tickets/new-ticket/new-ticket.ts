import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  handleForm(request: string, title: string) {
    console.log(title, request);
    this.form?.nativeElement.reset();
  }
  ngAfterViewInit() {
    console.log('after view init');
  }
}
