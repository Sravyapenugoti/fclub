import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { IndexComponent } from './components/shared/index/index.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectRequiredValidatorDirective } from './directives/select-required-validator.directive';
import { ServiceModule } from './services/service.module';
import { InternalServerErrorComponent } from './components/shared/internal-server-error/internal-server-error.component';
import { PageNotFoundErrorComponent } from './components/shared/page-not-found-error/page-not-found-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SignupComponent,
    SelectRequiredValidatorDirective,
    InternalServerErrorComponent,
    PageNotFoundErrorComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
