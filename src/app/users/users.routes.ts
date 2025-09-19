import { ResolveFn, Routes } from '@angular/router';
import { canLeaveEditPage, NewTaskComponent } from '../tasks/new-task/new-task.component';
import { resolveTile } from './user-tasks/user-tasks.component';
import { Task } from '../tasks/task/task.model';
import { inject } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import { TasksComponent } from '../tasks/tasks.component';

const resolveUserTasks: ResolveFn<Task[]> = (activatedRouteSnapshot, routerState) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'));

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix',
    title: 'select a task',
  },
  {
    path: 'tasks',
    component: TasksComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
    title: resolveTile,
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
