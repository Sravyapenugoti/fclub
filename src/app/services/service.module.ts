import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from './account.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HandlingErrorsService } from './handling-errors.service';
import { WizardActivateService } from './wizard-activate.service';
import { SpinnerService } from './spinner.service';

@NgModule({
  declarations: [
  ],
  providers: [AccountService, HandlingErrorsService, WizardActivateService, SpinnerService,
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
