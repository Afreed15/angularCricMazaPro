import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly ourUrl='https://localhost:44321/api';
  list: Login[];
  constructor(private objhttp:HttpClient) { }
  loginList()
  {
  this.objhttp.get(this.ourUrl+'/logins/').toPromise().then
  (l=>this.list=l as Login[]);
  }
}
