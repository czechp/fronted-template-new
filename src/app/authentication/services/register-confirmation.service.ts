import {inject, Injectable} from '@angular/core';
import {RegisterConfirmationModel} from "../models/register-confirmation.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/constants/url";

@Injectable({
  providedIn: 'root'
})
export class RegisterConfirmationService {
  private httpClient = inject(HttpClient);

  constructor() {
  }

  confirmRegistration(registerConfirmationModel: RegisterConfirmationModel) {
    return this.httpClient.post<void>(`${BACKEND_URL}/users/confirm`, registerConfirmationModel);
  }
}
