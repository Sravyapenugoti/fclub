import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from 'src/app/models/signup';
import { roles } from 'src/app/models/roles';
import { environment } from 'src/environments/environment.prod';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  signup(body: signup): any {
    return this.http.post(environment.productionURL + "signup", body)
  }

  getRoles(): Observable<roles[]> {
    return this.http.get<roles[]>(environment.productionURL + 'roles');
  }
}
