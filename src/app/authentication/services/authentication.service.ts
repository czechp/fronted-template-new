import {Injectable} from '@angular/core';
import {LoginModel} from "../models/login.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/constants/url";
import {LoginResponseModel} from "../models/login-response.model";
import {Observable, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthenticationData, loginAction} from "../store/authentication.store";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private store: Store) {
  }

  login(loginModel: LoginModel): Observable<any> {
    return this.httpClient.post<LoginResponseModel>(`${BACKEND_URL}/login`, loginModel)
      .pipe(tap((loginResponseModel) => {
          this.storeCredentials(loginModel, loginResponseModel);
          this.notifyStore(loginModel, loginResponseModel);
        }),
      );
  }

  isLogged(): boolean {
    return localStorage.getItem("login") != null;
  }


  private storeCredentials(loginModel: LoginModel, loginResponseModel: LoginResponseModel) {
    localStorage.setItem("login", loginModel.login);
    localStorage.setItem("authToken", this.generateBasicAuthHash(loginModel));
    localStorage.setItem("email", loginResponseModel.email);
    localStorage.setItem("role", loginResponseModel.role);
  }

  private generateBasicAuthHash(loginModel: LoginModel): string {
    const hash = btoa(`${loginModel.login}:${loginModel.password}`);
    return `Basic ${hash}`;
  }

  private notifyStore(loginModel: LoginModel, loginResponseModel: LoginResponseModel) {
    const authenticationData: AuthenticationData = {
      logged: true,
      login: loginModel.login,
      email: loginResponseModel.email,
      role: loginResponseModel.role
    };
    this.store.dispatch(loginAction({data: authenticationData}));
  }

}
