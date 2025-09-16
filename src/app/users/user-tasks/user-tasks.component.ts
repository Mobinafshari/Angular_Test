import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  userName: string | undefined;
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (val) => {
        this.userName = this.userService.users.find((u) => u.id === val.get('userId'))?.name;
      },
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  // userName = computed(() => this.userService.users.find((u) => u.id === this.userId())?.name);
}
