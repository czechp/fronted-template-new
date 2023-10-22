import {inject, Injectable} from '@angular/core';
import {RegisterConfirmationForm} from "../forms/register-confirmation.form";
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {RegisterConfirmationService} from "./register-confirmation.service";

@Injectable()
export class RegisterConfirmationStateService {
  private formBuilder = inject(FormBuilder);
  registerConfirmationForm: RegisterConfirmationForm = this.formBuilder.group({
      confirmationToken: this.formBuilder.control("", {nonNullable: true, validators: [Validators.required]})
    }
  );
  private registerConfirmationService = inject(RegisterConfirmationService);

  confirmRegistration(): Observable<void> {
    return this.registerConfirmationService.confirmRegistration(this.registerConfirmationForm.getRawValue());
  }

  invalid() {
    return this.registerConfirmationForm.invalid;
  }
}
