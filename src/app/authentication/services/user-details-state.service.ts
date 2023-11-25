import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";
import {UserModel} from "../models/user.model";
import {Router} from "@angular/router";
import {UserActivateModel} from "../models/user-activate.model";
import {StatementService} from "../../shared/services/statement.service";
import {UserChangeRoleModel} from "../models/user-change-role.model";

@Injectable()
export class UserDetailsStateService {
  private userId!: number;
  private userService = inject(UserService);
  tabIndex$ = new BehaviorSubject(0);
  user$ = new BehaviorSubject<UserModel | null>(null);
  private router = inject(Router);
  private statementService = inject(StatementService);

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
        this.statementService.showInfo("Użytkownik został usunięty");
      });
  }

  activateUser(activationModel: UserActivateModel) {
    this.userService.activateUser(activationModel)
      .subscribe(() => {
        this.goToFirstTab();
        this.showInfoAboutActivation(activationModel);
        this.refreshState();
      });
  }

  changeRole(changeRoleModel: UserChangeRoleModel) {
    this.userService.changeRole(changeRoleModel)
      .subscribe(() => {
        this.goToFirstTab();
        this.statementService.showInfo("Przypisano nową rolę dla użytkownika");
        this.refreshState();
      });
  }

  private assignNewState(userModel: UserModel) {
    this.user$.next(userModel);
  }

  private goToFirstTab() {
    this.tabIndex$.next(0);
  }

  private refreshState() {
    this.userService.getUserById(this.userId)
      .subscribe((userModel) => {
        this.assignNewState(userModel);
      });
  }

  private showInfoAboutActivation(activationModel: UserActivateModel) {
    const activationStateMsg = activationModel.activate ? "aktywowany" : "zablokowany";
    this.statementService.showInfo("Użytkownik " + activationStateMsg);
  }
}
