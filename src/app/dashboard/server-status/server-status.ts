import { Component, OnDestroy, OnInit } from '@angular/core';

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
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus = ServerStatusEnum.ONLINE;
  private interval?: number;
  ngOnInit() {
    this.interval = setInterval(() => {
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
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
