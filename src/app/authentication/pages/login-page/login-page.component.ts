import {Component, inject} from '@angular/core';
import {AuthenticationFormService, LoginForm} from "../../services/authentication-form.service";
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";
import {StatementService} from "../../../shared/services/statement.service";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AuthenticationFormService]
})
export class LoginPageComponent {
  private authenticationFormService = inject(AuthenticationFormService);
  loginForm: LoginForm = this.authenticationFormService.loginForm;
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  private statementService = inject(StatementService);
  protected readonly ValidatorsMessages = ValidatorsMessages;

  loginClick() {
    if (this.loginForm.valid) {
      const loginModel = this.authenticationFormService.createLoginModel();
      this.authenticationService.login(loginModel)
        .subscribe(() => this.router.navigate(["/"]));
    } else
      this.statementService.showIncorrectFormValidation();
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
}
