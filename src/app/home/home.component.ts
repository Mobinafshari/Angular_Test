import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private destroyRef: DestroyRef) {}
  callBackMessage?: string;
  ngOnInit() {
    const sub = this.activatedRoute.queryParamMap.subscribe((val) => {
      console.log('===>', val.get('cb'));
      this.callBackMessage =
        val.get('cb') === 'failedLogin'
          ? 'Oops seems you couldent login, comback later please'
          : undefined;
    });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}
