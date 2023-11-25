import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {UserChangeRoleForm} from "../../forms/user-change-role-form";
import {FormBuilder, Validators} from "@angular/forms";
import {UserRole} from "../../constants/user-role";
import {UserChangeRoleModel} from "../../models/user-change-role.model";

@Component({
  selector: 'app-user-change-role-form',
  templateUrl: './user-change-role-form.component.html',
  styleUrls: ['./user-change-role-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserChangeRoleFormComponent {
  userId!: number;
  userRoleForm!: UserChangeRoleForm;
  roleOptions: { label: string, value: string }[];
  @Output()
  roleChanged = new EventEmitter<UserChangeRoleModel>();
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.roleOptions = this.populateRoles();
  }

  @Input({required: true})
  set user(user: UserModel) {
    this.userId = user.id;
    this.userRoleForm = this.formBuilder.group({
      role: this.formBuilder.control(user.userRole, {nonNullable: true, validators: [Validators.required]})
    });
    this.userRoleForm.controls.role.valueChanges.subscribe(value => {
      this.roleChanged.emit({userId: this.userId, role: value})
    })
  }

  private populateRoles() {
    return Object.keys(UserRole)
      .map((key) => ({label: UserRole[key], value: key}));
  }

}
