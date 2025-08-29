import { Component } from '@angular/core';

enum ServerStatusEnum {
  ONLINE = 'online',
  OFFLINE = 'offline',
  UNKNOWN = 'unknown',
}

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss',
})
export class ServerStatus {
  currentStatus = ServerStatusEnum.ONLINE;

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = ServerStatusEnum.ONLINE;
      } else if (rnd < 0.9) {
        this.currentStatus = ServerStatusEnum.OFFLINE;
      } else {
        this.currentStatus = ServerStatusEnum.UNKNOWN;
      }
    }, 3000);
  }
}
