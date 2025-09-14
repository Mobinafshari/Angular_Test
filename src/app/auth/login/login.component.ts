import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild<NgForm>('form');
  private destroyRef = inject(DestroyRef);
  constructor() {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      this.form()?.setValue({
        email: savedEmail,
        password: '',
      });
    }
    afterNextRender(() => {
      const subscription = this.form()
        ?.valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => localStorage.setItem('email', value.email),
        });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }
  handleForm(formData: NgForm) {
    if (!formData.form.valid) return;
    console.log(formData.form.value);
    formData.form.reset();
  }
}
