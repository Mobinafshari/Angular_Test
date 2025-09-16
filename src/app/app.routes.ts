import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: 'users/:userId',
    component: UserTasksComponent,
  },
  {
    path: '',
    component: NoTaskComponent,
  },
];
