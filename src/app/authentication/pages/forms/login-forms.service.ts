import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface LoginForm {
  login: FormControl<string | null>,
  password: FormControl<string | null>
}

@Injectable({
  providedIn: 'root'
})
export class LoginFormsService {

  constructor(private formBuilder: FormBuilder) {
  }

  createLoginForm(): FormGroup<LoginForm> {
    return this.formBuilder.group({
      login: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
}
