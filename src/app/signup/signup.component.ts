import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignUpForm } from './signUp.model';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signUpForm: FormGroup;
  constructor(readonly formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group<SignUpForm>({
      userName: this.formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      password: this.formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      email: this.formBuilder.control('', { nonNullable: true, validators: Validators.required }),
      phoneNumber: this.formBuilder.control<number | null>(null, {
        validators: Validators.required,
      }),
    });
  }
  // private formBuilder = inject(FormBuilder);
  // signUpForm = this.formBuilder.group({
  //   userName: ['', Validators.required],
  //   password: ['', Validators.required, Validators.minLength(6)],
  //   email: ['', Validators.required, Validators.email],
  //   phoneNumber: [null, Validators.required],
  // });

  onSubmit() {
    console.log('===>', this.signUpForm.value);
  }
}
