import { inject, Injectable } from '@angular/core';
import { LoginCredentials } from './auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  private router = inject(Router);
  login(values: LoginCredentials) {
    alert('nothing happend HAHA!');
    this.router.navigateByUrl('/?cb=failedLogin');
  }
}
