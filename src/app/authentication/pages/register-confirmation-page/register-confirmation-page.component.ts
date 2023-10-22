import {Component, inject} from '@angular/core';
import {RegisterConfirmationForm} from "../../forms/register-confirmation.form";
import {RegisterConfirmationStateService} from "../../services/register-confirmation-state.service";

@Component({
  selector: 'app-register-confirmation-page',
  templateUrl: './register-confirmation-page.component.html',
  styleUrls: ['./register-confirmation-page.component.scss'],
  providers: [RegisterConfirmationStateService]
})
export class RegisterConfirmationPageComponent {
  registerConfirmationForm: RegisterConfirmationForm = inject(RegisterConfirmationStateService).registerConfirmationForm;

}
