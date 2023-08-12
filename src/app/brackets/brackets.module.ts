import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BracketsRoutingModule } from './brackets-routing.module';
import { BracketTileComponent } from './components/bracket-tile/bracket-tile.component';
import { BracketComponent } from './components/bracket/bracket.component';
import { TournamentComponent } from './pages/tournament/tournament.component';


@NgModule({
  declarations: [
    BracketTileComponent,
    BracketComponent,
    TournamentComponent
  ],
  imports: [
    CommonModule,
    BracketsRoutingModule
  ]
})
export class BracketsModule { }
