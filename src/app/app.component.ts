import { Component } from '@angular/core';
import { Header } from "./header/header";
import { ServerStatus } from "./dashboard/server-status/server-status";
import { Traffic } from "./dashboard/traffic/traffic";
import { Ticket } from "./dashboard/ticket/ticket";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, ServerStatus, Traffic, Ticket, DashboardItem],
})
export class AppComponent {

}
