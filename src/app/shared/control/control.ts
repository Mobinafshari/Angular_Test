import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
  @Input({ required: true }) label!: string;
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private el = inject(ElementRef);
  onClick() {
    console.log(this.el);
  }
}
