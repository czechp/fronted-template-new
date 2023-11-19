import {Component, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input({required: true})
  users!: UserModel[];

  navigateToDetails(userId: number) {
    console.log(`${userId}`)
  }
}
