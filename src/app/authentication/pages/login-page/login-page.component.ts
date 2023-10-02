import {Component} from '@angular/core';
import {LoginForm, LoginFormsService} from "../../services/login-forms.service";
import {FormGroup} from "@angular/forms";
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";
import {StatementService} from "../../../shared/services/statement.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup<LoginForm>;
  protected readonly ValidatorsMessages = ValidatorsMessages;

  constructor(private loginFormService: LoginFormsService, private statementService: StatementService) {
    this.loginForm = this.loginFormService.createLoginForm();
  }

  loginClick() {
    this.statementService.showError("Hello there");
  }

}
