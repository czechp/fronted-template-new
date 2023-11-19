import {inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../authentication/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {
  private authenticationService = inject(AuthenticationService);

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authenticationService.getCredentialsHashCode();
    if (!authToken)
      return next.handle(req);
    const requestWithAuth = req.clone({
      setHeaders: {
        Authorization: authToken
      }
    });
    return next.handle(requestWithAuth);
  }
}
