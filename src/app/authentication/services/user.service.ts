import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/constants/url";

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
}
