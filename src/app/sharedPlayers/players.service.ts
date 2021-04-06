import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Players } from '../players/players.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

    readonly ourUrl='https://localhost:44321/api';
    list: Players[];
    constructor(private objhttp:HttpClient) { }
    PlayersList()
    {
    this.objhttp.get(this.ourUrl+'/players/').toPromise().then
    (p=>this.list=p as Players[]);
    }
  }