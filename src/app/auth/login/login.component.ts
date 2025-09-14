import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) return null;
  return {
    doesNotContainQuestionMark: true,
  };
}

function uniqueEmail(control: AbstractControl) {
  if (control.value.email !== 'test@gmail.com') {
    return of(null);
  }
  return of({ uniqueEmailError: true });
}
let initialMail = '';
const existedEmail = localStorage.getItem('email');
if (existedEmail) {
  const savedEmail = JSON.parse(existedEmail);
  initialMail = savedEmail;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl(initialMail, {
      validators: [Validators.email, Validators.required],
      asyncValidators: uniqueEmail,
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  });
  ngOnInit(): void {
    // const existedEmail = localStorage.getItem('email');
    // if (existedEmail) {
    //   const savedEmail = JSON.parse(existedEmail);
    //   this.form.patchValue({ email: savedEmail });
    // }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => localStorage.setItem('email', JSON.stringify({ email: value.email })),
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  get EmailError() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }
  get PasswordError() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }
  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }
}
