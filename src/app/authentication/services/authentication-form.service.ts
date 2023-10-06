import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../models/login.model";

export interface LoginForm {
  login: FormControl<string | null>,
  password: FormControl<string | null>
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
}
