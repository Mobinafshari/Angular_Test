import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() color = 'yellow';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  constructor(private readonly el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
