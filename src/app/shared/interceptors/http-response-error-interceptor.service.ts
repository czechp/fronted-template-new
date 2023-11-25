import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {StatementService} from "../services/statement.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpResponseErrorInterceptorService implements HttpInterceptor {
  private router = inject(Router);
  constructor(private statementService: StatementService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this.handleError(error);
        return throwError(() => error);
      })
    );
  }

  private handleError(response: HttpErrorResponse) {
    switch (response.status) {
      case 401: {
        this.statementService.showError("Brak uprawnień");
        this.router.navigate(["/"]);
        break;
      }
      default:
        this.statementService.showError(response.error.message || "Brak połączenia z serwerem");
    }
  }
}
