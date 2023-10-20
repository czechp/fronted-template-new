import {inject, Injectable} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {LoginModel} from "../models/login.model";

export type LoginForm = FormGroup<{
  login: FormControl<string>,
  password: FormControl<string>
}>;

@Injectable()
export class AuthenticationFormService {
  private formBuilder = inject(FormBuilder);
  loginForm: LoginForm = this.formBuilder.group({
    login: this.formBuilder.control("", {nonNullable: true, validators: [Validators.required]}),
    password: this.formBuilder.control("", {nonNullable: true, validators: [Validators.required]})
  });

  createLoginModel(): LoginModel {
    return this.loginForm.getRawValue();
  }
}

//TODO get to register from service
export function passwordSameValidator(control: AbstractControl): ValidationErrors | null {
  const passwordConfirmation = control.value as string;
  const password: string = control.parent?.get("password")?.value as string;
  if (passwordConfirmation !== password)
    return {differentPassword: true};
  return null;
}
