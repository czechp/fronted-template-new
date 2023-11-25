import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable()
export class UserDetailsStateService {
  userService = inject(UserService);
  router = inject(Router);
  user$ = new BehaviorSubject<UserModel | null>(null);

  constructor() {
  }

  getUser(userId: number) {
    this.userService.getUserById(userId)
      .subscribe((result) => {
        this.user$.next(result);
      });
  }

  removeUser(userId: number) {
    this.userService.removeUserById(userId)
      .subscribe(() => {
        this.router.navigate(["users"]);
      });
  }
}
