import { Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { randomGuard } from './random-guard.guard';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'random/:randomId',
        component: RandomComponent,
        canActivate: [randomGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
