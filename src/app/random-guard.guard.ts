import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

export const randomGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const param = route.paramMap.get('randomId') ?? 0;
  if (+param > 50) return true;
  return new RedirectCommand(router.createUrlTree(['/login']));
};
