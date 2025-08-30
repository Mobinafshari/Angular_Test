import { Directive, ElementRef, inject, Input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  @Input({ alias: 'appAuth', required: true }) userType!: Permission;
  private authService = inject(AuthService);
  private elementRef = inject<ElementRef>(ElementRef);
  constructor() {
    if (this.authService.activePermission() === this.userType) {
      this.elementRef.nativeElement.
    } else {
    }
  }
}
