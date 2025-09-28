import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  random = Math.floor(Math.random() * 100);
  private sub: Subscription;
  constructor(private router: Router) {
    this.sub = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.random = Math.floor(Math.random() * 100);
      }
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
