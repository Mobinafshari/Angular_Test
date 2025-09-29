import { afterNextRender, Component, inject, OnDestroy, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private router = inject(Router);
  private sub!: Subscription;
  constructor() {
    afterNextRender(() => {
      this.form()?.valueChanges?.subscribe({
        next: (val) => console.log(val),
      });
    });
  }
  navigateToRandom() {
    this.sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e);
      }
    });
    this.router.navigate(['/random', 55]);
  }

  handleSubmit(formData: NgForm) {
    if (!formData.form.valid) return;
    console.log(formData.form.value);
  }
}
