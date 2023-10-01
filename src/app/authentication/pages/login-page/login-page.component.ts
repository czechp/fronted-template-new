import {Component} from '@angular/core';
import {LoginForm, LoginFormsService} from "../forms/login-forms.service";
import {FormGroup} from "@angular/forms";
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup<LoginForm>;
  protected readonly ValidatorsMessages = ValidatorsMessages;

  constructor(private loginFormService: LoginFormsService) {
    this.loginForm = this.loginFormService.createLoginForm();
  }

  loginClick() {
    if (this.loginForm.valid) {
    }
  }

}
