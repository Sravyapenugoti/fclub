import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from 'src/app/models/signup';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  signup(body: signup): any {
    return this.http.post(environment.productionURL + "signup", body)
  }

}
