import {Component, inject} from '@angular/core';
import {RegisterConfirmationForm} from "../../forms/register-confirmation.form";
import {RegisterConfirmationStateService} from "../../services/register-confirmation-state.service";
import {StatementService} from "../../../shared/services/statement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-confirmation-page',
  templateUrl: './register-confirmation-page.component.html',
  styleUrls: ['./register-confirmation-page.component.scss'],
  providers: [RegisterConfirmationStateService]
})
export class RegisterConfirmationPageComponent {
  private registerConfirmationStateService = inject(RegisterConfirmationStateService);
  registerConfirmationForm: RegisterConfirmationForm = this.registerConfirmationStateService.registerConfirmationForm;
  private statementService = inject(StatementService);
  private router = inject(Router);

  confirmRegistration() {
    if (this.registerConfirmationStateService.invalid()) {
      this.statementService.showIncorrectFormValidation();
      return;
    }
    this.registerConfirmationStateService.confirmRegistration()
      .subscribe(() => {
        this.statementService.showInfo("Rejestracja zakończona czekaj na potwierdzenie konta przez administratora");
        this.router.navigate(["/login"]);
      })
  }
}
