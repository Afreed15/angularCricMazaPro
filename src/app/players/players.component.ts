import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../sharedPlayers/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(public objs:PlayersService) { }

  ngOnInit(): void {
    this.objs.PlayersList()
  }

}
