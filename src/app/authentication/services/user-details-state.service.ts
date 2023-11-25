import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";
import {UserActivateModel} from "../models/user-activate.model";

@Injectable()
export class UserDetailsStateService {
  tabIndex$ = new BehaviorSubject(0);
  private userId!: number;
  private userService = inject(UserService);
  user$ = new BehaviorSubject<UserModel | null>(null);
  private router = inject(Router);

  constructor() {
  }

  getUser(userId: number) {
    this.userId = userId;
    this.userService.getUserById(this.userId)
      .subscribe((result) => {
        this.assignNewState(result);
      });
  }

  removeUser(userId: number) {
    this.userService.removeUserById(userId)
      .subscribe(() => {
        this.router.navigate(["users"]);
      });
  }

  activateUser(activationModel: UserActivateModel) {
    this.userService.activateUser(activationModel)
      .subscribe(() => {
        this.userService.getUserById(this.userId)
          .subscribe((userModel) => {
            this.assignNewState(userModel);
            this.goToFirstTab();
          });
      });
  }

  private assignNewState(userModel: UserModel) {
    this.user$.next(userModel);
  }

  private goToFirstTab() {
    this.tabIndex$.next(0);
  }
}
