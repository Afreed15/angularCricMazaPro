import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teams } from './teams.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  readonly ourUrl='https://localhost:44321/api';
  list: Teams[];
  constructor(private objhttp:HttpClient) { }
  TeamsList()
  {
  this.objhttp.get(this.ourUrl+'/teams/').toPromise().then
  (t=>this.list=t as Teams[]);
  }
}
