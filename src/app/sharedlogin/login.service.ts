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
  TeamsList()
  {
  this.objhttp.get(this.ourUrl+'/login/').toPromise().then
  (t=>this.list=t as Login[]);
  }
}
