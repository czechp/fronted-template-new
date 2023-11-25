import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationModalComponent} from "../../../shared/components/confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDeleteComponent {
  @Input({required: true})
  user!: UserModel;
  @Output()
  userDeleted = new EventEmitter<number>();
  private dialog = inject(MatDialog);

  openModal() {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        text: `Czy na pewno chcesz usunąć użytkowinka ${this.user.username}?`,
        confirmation: () => {
          this.deleteUser();
        }
      }
    });
  }

  private deleteUser() {
    this.userDeleted.emit(this.user.id);
  }
}
