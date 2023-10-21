import {FormControl, FormGroup} from "@angular/forms";

export type RegisterForm = FormGroup<{
  username: FormControl<string>,
  password: FormControl<string>,
  passwordConfirm: FormControl<string>,
  email: FormControl<string>
}>
