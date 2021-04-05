import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersProfileComponent } from './players-profile/players-profile.component';
import { PlayersComponent } from './players/players.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'teams',component:TeamsComponent},
  {path:'players',component:PlayersComponent},
  {path:'points-table',component:PointsTableComponent},
  {path:'players-profile',component:PlayersProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
