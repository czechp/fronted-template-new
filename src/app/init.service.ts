import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private authenticationService: AuthenticationService) {
  }

  initializeApp() {
    this.authenticationService.initAuthentication();
  }
}
