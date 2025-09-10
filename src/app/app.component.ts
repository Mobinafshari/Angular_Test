import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  private destroyRef = inject(DestroyRef);
  constructor() {}
  private customInterval$ = new Observable((subscriber) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count > 3) {
        clearInterval(interval);
        subscriber.complete();
      }
      subscriber.next({ message: 'Hello Darkness!' });
      count++;
    }, 1000);
  });
  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (value) => console.log(value),
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`${val} clicked`),
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  onClick() {}
}
