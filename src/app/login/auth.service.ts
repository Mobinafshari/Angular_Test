import { DestroyRef, Injectable } from '@angular/core';
import { LoginCredentials } from './auth.model';
import { interval, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly destroyRef: DestroyRef) {}
  login(values: LoginCredentials) {
    console.log(values);
    localStorage.setItem('userName', values.userName);
  }

  logger() {
    const observable = interval(1000).subscribe({
      next: () => {
        of('admin', 'normal', 'superAdmin').pipe(map((x) => console.log(`user role is ${x}`)));
      },
    });

    this.destroyRef.onDestroy(() => observable.unsubscribe());
  }
}
