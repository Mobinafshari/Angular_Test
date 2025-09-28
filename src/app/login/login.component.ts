import { Component, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { delay, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  template: `
    @if(loading){
    <span>loading...</span>
    }
  `,
})
export class LoginComponent implements OnDestroy {
  private router = inject(Router);
  private sub!: Subscription;
  private loading = false;

  constructor() {
    this.router.events
      .pipe(
        map(() => !!this.router.getCurrentNavigation()),
        delay(500)
      )
      .subscribe((isLoading) => (this.loading = isLoading));
  }
  navigateToRandom() {
    this.sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e);
      }
    });
    this.router.navigate(['/random', 55]);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
