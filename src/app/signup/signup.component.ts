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
  private formBuilder = inject(FormBuilder);
  signUpForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(6)],
    email: ['', Validators.required, Validators.email],
    phoneNumber: [null, Validators.required],
  });

  onSubmit() {
    console.log('===>', this.signUpForm.value);
  }
}
