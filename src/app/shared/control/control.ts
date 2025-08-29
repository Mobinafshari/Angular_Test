import {
  afterEveryRender,
  afterNextRender,
  afterRenderEffect,
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

  constructor() {
    afterRenderEffect(() => {
      console.log('after render');
    });

    afterNextRender(() => console.log('after next render'));
    afterEveryRender(() => console.log('after every render'));
  }
  private el = inject(ElementRef);
  onClick() {
    console.log(this.el);
  }
}
