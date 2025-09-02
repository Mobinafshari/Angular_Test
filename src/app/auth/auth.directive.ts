import { Directive, ElementRef, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  @Input({ alias: 'appAuth', required: true }) userType!: Permission;
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  constructor() {
    if (this.authService.activePermission() === this.userType) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
