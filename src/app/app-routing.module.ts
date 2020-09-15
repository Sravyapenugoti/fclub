import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { IndexComponent } from './components/shared/index/index.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { PageNotFoundErrorComponent } from './components/shared/page-not-found-error/page-not-found-error.component';
import { InternalServerErrorComponent } from './components/shared/internal-server-error/internal-server-error.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'pagenotfound', component: PageNotFoundErrorComponent },
  { path: 'internalserver', component: InternalServerErrorComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
