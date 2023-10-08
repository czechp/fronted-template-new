import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationData} from "../../store/authentication.store";

@Component({
  selector: 'app-authentication-info',
  templateUrl: './authentication-info.component.html',
  styleUrls: ['./authentication-info.component.scss']
})
export class AuthenticationInfoComponent {
  authenticationData$: Observable<AuthenticationData>;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationData$ = this.authenticationService.subscribeToAuthenticationData()
  }

  logoutClick() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
