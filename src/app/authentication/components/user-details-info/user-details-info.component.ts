import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {InfoRow} from "../../../shared/components/info-section/info-section.component";
import {UserRolePipe} from "../../pipe/user-role.pipe";
import {YesOrNoPipe} from "../../../shared/pipes/yes-or-no.pipe";
import {FullDatePipe} from "../../../shared/pipes/full-date.pipe";

@Component({
  selector: 'app-user-details-info',
  templateUrl: './user-details-info.component.html',
  styleUrls: ['./user-details-info.component.scss'],
  providers: [UserRolePipe, YesOrNoPipe, FullDatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsInfoComponent {
  userData: InfoRow[] = []
  private userRolePipe = inject(UserRolePipe);
  private yesOrNoPipe = inject(YesOrNoPipe);
  private fullDatePipe = inject(FullDatePipe);

  constructor() {
  }

  @Input({required: true})
  set user(user: UserModel) {
    this.userData = [
      {label: "Id", value: user.id},
      {label: "Login", value: user.username},
      {label: "Email", value: user.email},
      {label: "Rola", value: this.userRolePipe.transform(user.userRole)},
      {label: "Potwierdzenie email", value: this.yesOrNoPipe.transform(user.confirmed)},
      {label: "Aktywacja administratora", value: this.yesOrNoPipe.transform(user.confirmedByAdmin)},
      {label: "Utworzono", value: this.fullDatePipe.transform(user.createdAt)}
    ]
  }
}
