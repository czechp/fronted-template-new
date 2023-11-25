import {Component, inject, Input} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input({required: true})
  users!: UserModel[];
  private router = inject(Router);

  navigateToDetails(userId: number) {
    this.router.navigate(["/user-details", userId]);
  }
}
