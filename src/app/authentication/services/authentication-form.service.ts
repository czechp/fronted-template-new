import {Injectable} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {LoginModel} from "../models/login.model";

export interface LoginForm {
  login: FormControl<string | null>,
  password: FormControl<string | null>
}

export interface RegisterForm {
  login: FormControl<string | null>,
  password: FormControl<string | null>,
  passwordConfirm: FormControl<string | null>,
  email: FormControl<string | null>
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFormService {

  constructor(private formBuilder: FormBuilder) {
  }

  createLoginForm(): FormGroup<LoginForm> {
    return this.formBuilder.group({
      login: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  createLoginModel(loginForm: FormGroup<LoginForm>): LoginModel {
    return {
      login: loginForm.value.login as string,
      password: loginForm.value.password as string
    }
  }

  createRegisterForm(): FormGroup<RegisterForm> {
    return this.formBuilder.group({
      login: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
      passwordConfirm: ["", [Validators.required, passwordSameValidator]],
      email: ["", [Validators.required, Validators.email]],
    });
  }
}

export function passwordSameValidator(control: AbstractControl): ValidationErrors | null {
  const passwordConfirmation = control.value as string;
  const password: string = control.parent?.get("password")?.value as string;
  if (passwordConfirmation !== password)
    return {differentPassword: true};
  return null;
}
