import {Injectable} from '@angular/core';
import {LoginModel} from "../models/login.model";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../shared/constants/url";
import {LoginResponseModel} from "../models/login-response.model";
import {Observable, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthenticationData, loginAction, selectAuthenticationData} from "../store/authentication.store";

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
        this.notifyStore({
          logged: this.isLogged(),
          login: loginModel.login,
          email: loginResponseModel.email,
          role: loginResponseModel.role
        });
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

  initAuthentication() {
    if (this.isLogged()) {
      const credentials = this.fetchCredentials();
      this.notifyStore(credentials);
    }
  }

  private generateBasicAuthHash(loginModel: LoginModel): string {
    const hash = btoa(`${loginModel.login}:${loginModel.password}`);
    return `Basic ${hash}`;
  }

  logout() {
    this.clearCredentials();
    const credentials = this.fetchCredentials();
    this.notifyStore(credentials);
  }

  subscribeToAuthenticationData() {
    return this.store.select(selectAuthenticationData);
  }

  private notifyStore(authenticationData: AuthenticationData) {
    this.store.dispatch(loginAction({data: authenticationData}));
  }

  private fetchCredentials(): AuthenticationData {
    return {
      logged: this.isLogged(),
      login: localStorage.getItem("login") as string,
      email: localStorage.getItem("email") as string,
      role: localStorage.getItem("role") as string
    };
  }

  isAdmin() {
    const authData = this.fetchCredentials();
    return authData.role === "ADMIN";
  }

  private clearCredentials() {
    localStorage.removeItem("login");
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("role");
  }
}
