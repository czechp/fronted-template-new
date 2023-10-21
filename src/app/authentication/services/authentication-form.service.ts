import {inject, Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginModel} from "../models/login.model";
import {LoginForm} from "../forms/login.form";


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
