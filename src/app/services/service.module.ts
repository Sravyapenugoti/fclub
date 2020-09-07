import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HandlingErrorsService } from './handling-errors.service';

@NgModule({
  declarations: [
  ],
  providers: [AccountService, HandlingErrorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
