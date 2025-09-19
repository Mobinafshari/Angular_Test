import { Component, computed, DestroyRef, inject, Input, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  // userId = input.required<string>();
  @Input({
    required: true,
  })
  message!: string;
  @Input({
    required: true,
  })
  userName!: string;
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  // userName: string | undefined;
  // private destroyRef = inject(DestroyRef);
  // ngOnInit(): void {
  //   console.log(this.activatedRoute.snapshot.params, this.message);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (val) => {
  //       this.userName = this.userService.users.find((u) => u.id === val.get('userId'))?.name;
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
  // userName = computed(() => this.userService.users.find((u) => u.id === this.userId())?.name);
}

export const resolveName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';

  return userName;
};

export const resolveTile: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return `${resolveName(activatedRoute, routerState)} 's Tasks`;
};
