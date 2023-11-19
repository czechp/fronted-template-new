import {Component, inject} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  users$ = inject(UserService).getUsers();
}
