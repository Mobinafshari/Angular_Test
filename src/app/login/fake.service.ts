import { Injectable } from '@angular/core';
import { LoginCredentials } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  login(values: LoginCredentials) {
    alert('nothing happend HAHA!');
  }
}
