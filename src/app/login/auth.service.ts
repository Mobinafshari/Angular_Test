import { Injectable } from '@angular/core';
import { LoginCredentials } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(values: LoginCredentials) {
    console.log(values);
    localStorage.setItem('userName', values.userName);
  }
}
