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
  ngOnInit(): void {
    this.randomId = this.route.snapshot.paramMap.get('randomId') ?? '';
  }
}
