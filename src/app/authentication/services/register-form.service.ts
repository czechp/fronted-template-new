import {inject, Injectable} from '@angular/core';
import {RegisterForm} from "../forms/register.form";
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from "@angular/forms";
import {RegisterModel} from "../models/register.model";

@Injectable()
export class RegisterFormService {
  private formBuilder = inject(FormBuilder);
  registerForm: RegisterForm = this.formBuilder.group({
    username: this.formBuilder.control("", {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: this.formBuilder.control("", {nonNullable: true, validators: [Validators.required, Validators.email]}),
    password: this.formBuilder.control("", {nonNullable: true, validators: [Validators.required]}),
    passwordConfirm: this.formBuilder.control("", {
      nonNullable: true,
      validators: [Validators.required, passwordSameValidator]
    })
  });

  isInvalid() {
    return this.registerForm.invalid;
  }

  toRegisterModel(): RegisterModel {
    return this.registerForm.getRawValue();
  }
}

function passwordSameValidator(control: AbstractControl): ValidationErrors | null {
  const passwordConfirmation = control.value as string;
  const password: string = control.parent?.get("password")?.value as string;
  if (passwordConfirmation !== password)
    return {differentPassword: true};
  return null;
}

