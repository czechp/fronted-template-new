import {inject, Injectable} from '@angular/core';
import {RegisterModel} from "../models/register.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/constants/url";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private httpClient = inject(HttpClient);

  registerUser(registerModel: RegisterModel) {
    console.log(registerModel)
    return this.httpClient.post<void>(`${BACKEND_URL}/users/register`, registerModel);
  }
}
