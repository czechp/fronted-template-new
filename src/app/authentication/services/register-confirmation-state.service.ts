import {inject, Injectable} from '@angular/core';
import {RegisterConfirmationForm} from "../forms/register-confirmation.form";
import {FormBuilder, Validators} from "@angular/forms";

@Injectable()
export class RegisterConfirmationStateService {
  private formBuilder = inject(FormBuilder);
  registerConfirmationForm: RegisterConfirmationForm = this.formBuilder.group({
      confirmationToken: this.formBuilder.control("", {nonNullable: true, validators: [Validators.required]})
    }
  );

}
