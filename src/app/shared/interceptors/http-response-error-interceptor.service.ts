import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {StatementService} from "../services/statement.service";

@Injectable({
  providedIn: 'root'
})
export class HttpResponseErrorInterceptorService implements HttpInterceptor {

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
    this.statementService.showError(response.error.message || "Brak połączenia z serwerem");
  }
}
