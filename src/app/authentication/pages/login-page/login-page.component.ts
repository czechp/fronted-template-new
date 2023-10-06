import {Component} from '@angular/core';
import {AuthenticationFormService, LoginForm} from "../../services/authentication-form.service";
import {FormGroup} from "@angular/forms";
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";
import {StatementService} from "../../../shared/services/statement.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup<LoginForm>;
  protected readonly ValidatorsMessages = ValidatorsMessages;

  constructor(private loginFormService: AuthenticationFormService,
              private statementService: StatementService,
              private authenticationService: AuthenticationService,
              private router: Router
  ) {
    this.loginForm = this.loginFormService.createLoginForm();
  }

  loginClick() {
    if (this.loginForm.valid) {
      const loginModel = this.loginFormService.createLoginModel(this.loginForm);
      this.authenticationService.login(loginModel)
        .subscribe({
          next: () => {
            this.router.navigate(["/"])
          }
        });
    } else
      this.statementService.showIncorrectFormValidation();
  }

}
