import {FormControl, FormGroup} from "@angular/forms";

export type UserChangeRoleForm = FormGroup<{
  role: FormControl<string>
}>;
