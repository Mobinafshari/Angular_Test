import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketType } from './tickets.model';
import { Ticket } from '../ticket/ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
  host: {
    id: 'tickets',
  },
})
export class Tickets {
  tickets: TicketType[] = [];
  handleAddingTicket(values: { request: string; title: string }) {
    this.tickets.unshift({
      id: new Date().getDate().toString(),
      status: 'open',
      ...values,
    });
  }
}
