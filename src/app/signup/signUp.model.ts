import { FormControl } from '@angular/forms';

export interface SignUpForm {
  userName: FormControl<string>;
  password: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<number | null>;
}
