import {Component, inject} from '@angular/core';
import {RegisterForm} from "../../forms/register.form";
import {RegisterStateService} from "../../services/register-state.service";
import {StatementService} from "../../../shared/services/statement.service";
import {RegisterModel} from "../../models/register.model";
import {RegisterService} from "../../services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  providers: [RegisterStateService]
})
export class RegisterPageComponent {
  private registerFormService = inject(RegisterStateService);
  registerForm: RegisterForm = this.registerFormService.registerForm;
  private statementService = inject(StatementService);
  private registerService = inject(RegisterService);
  private router = inject(Router);

  registerUser() {
    if (this.registerFormService.isInvalid()) {
      this.statementService.showIncorrectFormValidation();
      return;
    }
    const registerModel: RegisterModel = this.registerFormService.toRegisterModel();
    this.registerService.registerUser(registerModel)
      .subscribe(() => {
        console.log("Works")
        this.statementService.showInfo("Na Twojego maila został wysłany token werifikacyjny wklej go tutaj");
        this.router.navigate(["/register-confirmation"]);
      })
  }
}
