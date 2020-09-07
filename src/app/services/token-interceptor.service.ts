import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HandlingErrorsService } from './handling-errors.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private es: HandlingErrorsService) { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json charset=utf-8',
        'dataType': 'json'
      }
    });

    return next.handle(tokenizedReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //this.spinnerService.hide();
        }
      }, (error : HttpErrorResponse) => {
        debugger;
        this.es.handleError(error);
        //this.spinnerService.hide();
      })
    );
  }

}
