import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandlingErrorsService {

  constructor(private router: Router) { }

  public errorMessage: string = '';
  public handleError = (error: HttpErrorResponse) => {
    if (error.status == 500)
      this.handle500Error(error);
    else if (error.status == 404)
      this.handle404Error(error);
    else if (error.status == 401)
      this.handle401Error(error);
    else
      this.handle500Error(error);
  }

  private handle401Error = (error: HttpErrorResponse) => {
    this.CreateErrorMessage(error);
    //this.as.logout();
    this.router.navigate(['/login']);
  }

  private handle500Error = (error: HttpErrorResponse) => {
    this.CreateErrorMessage(error);
    this.router.navigate(['/internalserver']);
  }

  private handle404Error = (error: HttpErrorResponse) => {
    this.CreateErrorMessage(error);
    this.router.navigate(['/pagenotfound'])
  }


  private CreateErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
