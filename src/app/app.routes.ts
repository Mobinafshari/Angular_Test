import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'random',
    component: RandomComponent,
  },
];
