import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.scss',
})
export class RandomComponent implements OnInit {
  randomId: string = '';
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    // this.randomId = this.route.snapshot.paramMap.get('randomId') ?? '';
    const subscription = this.route.paramMap.subscribe(
      (param) => (this.randomId = param.get('randomId') ?? '')
    );

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
