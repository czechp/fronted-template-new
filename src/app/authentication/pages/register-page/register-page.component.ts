import {Component} from '@angular/core';
import {AuthenticationFormService, RegisterForm} from "../../services/authentication-form.service";
import {FormGroup} from "@angular/forms";
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm: FormGroup<RegisterForm>;
  protected readonly ValidatorsMessages = ValidatorsMessages;

  constructor(private authenticationFormService: AuthenticationFormService) {
    this.registerForm = this.authenticationFormService.createRegisterForm();
  }

  registerClick() {
  }
}
