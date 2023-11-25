import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserDetailsStateService} from "../../services/user-details-state.service";


@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss'],
  providers: [UserDetailsStateService]
})
export class UserDetailsPageComponent {
  private userId: number | undefined;
  private activatedRoute = inject(ActivatedRoute);
  private userStateService = inject(UserDetailsStateService);
  user$ = this.userStateService.user$;

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params["id"];
      this.userStateService.getUser(this.userId as number);
    })
  }

  updateUser() {

  }

  deleteUser(userId: number) {
    this.userStateService.removeUser(userId);
  }
}
