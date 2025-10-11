import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectDirective]',
})
export class SelectDirective {
  constructor(
    private readonly templateRef: TemplateRef,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  
}
