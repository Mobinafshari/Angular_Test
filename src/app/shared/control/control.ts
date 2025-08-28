import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
})
export class Control {
  @Input({ required: true }) label!: string;
}
