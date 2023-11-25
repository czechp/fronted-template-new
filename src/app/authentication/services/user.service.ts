import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/constants/url";
import {UserActivateModel} from "../models/user-activate.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);

  constructor() {
  }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${BACKEND_URL}/users`);
  }

  getUserById(id: number) {
    return this.httpClient.get<UserModel>(`${BACKEND_URL}/users/${id}`);
  }

  removeUserById(userId: number) {
    return this.httpClient.delete(`${BACKEND_URL}/users/${userId}`);
  }

  activateUser(activationModel: UserActivateModel) {
    return this.httpClient.patch(`${BACKEND_URL}/users/confirm-by-admin/${activationModel.userId}`, {}, {params: {activation: activationModel.activate}});
  }
}
