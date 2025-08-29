import { Component, Input } from '@angular/core';
import { TicketType } from '../../tickets/tickets.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss',
})
export class Ticket {
  @Input({ required: true }) ticket!: TicketType;
}
