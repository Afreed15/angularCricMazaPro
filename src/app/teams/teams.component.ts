import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../TeamsShared/teams.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public objs:TeamsService) { }
   
  ngOnInit(): void {
    this.objs.TeamsList();
  }

}
