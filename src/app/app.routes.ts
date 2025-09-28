import { Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'random/:randomId',
        component: RandomComponent,
      },
    ],
  },
];
