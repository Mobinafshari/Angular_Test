import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { userRoutes } from './users/users.routes';

export const routes: Routes = [
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
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
