import {FormControl, FormGroup} from "@angular/forms";

export type RegisterConfirmationForm = FormGroup<{
  confirmationToken: FormControl<string>
}>;
