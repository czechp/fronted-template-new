import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../authentication/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  private authenticationService = inject(AuthenticationService);
  private router = inject(Router);

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticationService.isAdmin())
      return true;
    this.router.navigate(["/forbidden"]);
    return false;
  }


}
