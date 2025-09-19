import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segment) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 0.5) return true;
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};
export const routes: Routes = [
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    loadChildren: () => import('./users/users.routes').then((mod) => mod.userRoutes),
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello World!',
    },
    resolve: {
      userName: resolveName,
    },
  },
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
