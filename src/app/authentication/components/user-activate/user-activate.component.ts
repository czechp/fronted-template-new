import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {UserActivateModel} from "../../models/user-activate.model";

@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html',
  styleUrls: ['./user-activate.component.scss']
})
export class UserActivateComponent {
  @Input({required: true})
  user!: UserModel;
  @Output()
  activationChanged = new EventEmitter<UserActivateModel>;

  activate() {
    this.activationChanged.emit({userId: this.user.id, activate: true});
  }

  deactivate() {
    this.activationChanged.emit({userId: this.user.id, activate: false});
  }
}
