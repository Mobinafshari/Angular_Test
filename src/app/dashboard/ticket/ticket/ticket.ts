import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicketType } from '../../tickets/tickets.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss',
})
export class Ticket {
  @Input({ required: true }) ticket!: TicketType;
  @Output() complete = new EventEmitter();
  detailsVisible = false;
  onToggleVisibility() {
    this.detailsVisible = !this.detailsVisible;
  }
  onClose() {
    this.complete.emit();
  }
}
