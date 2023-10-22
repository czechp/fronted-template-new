import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegisterConfirmationForm} from "../../forms/register-confirmation.form";
import {ValidatorsMessages} from "../../../shared/constants/validators-messages";

@Component({
  selector: 'app-register-confirmation-form',
  templateUrl: './register-confirmation-form.component.html',
  styleUrls: ['./register-confirmation-form.component.scss']
})
export class RegisterConfirmationFormComponent {
  @Input({required: true})
  registerConfirmationForm!: RegisterConfirmationForm;
  @Output()
  registrationConfirmed = new EventEmitter<void>();
  protected readonly ValidatorsMessages = ValidatorsMessages;

  confirmRegistration() {
    this.registrationConfirmed.emit();
  }
}
