import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss',
})
export class RandomComponent implements OnInit {
  randomId: string = '';
  private destroyRef = inject(DestroyRef);
  constructor(readonly activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (value) => (this.randomId = value.get('randomId') ?? ''),
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
