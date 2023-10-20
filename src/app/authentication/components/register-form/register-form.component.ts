import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";
import {RegisterForm} from "../../forms/register.form";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  @Input({required: true})
  registerForm!: RegisterForm;
  @Output()
  userRegistered = new EventEmitter();
  protected readonly ValidatorsMessages = ValidatorsMessages;

  registerClick() {

  }
}
