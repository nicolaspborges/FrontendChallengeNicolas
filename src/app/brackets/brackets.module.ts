import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BracketsRoutingModule } from './brackets-routing.module';
import { BracketTileComponent } from './components/bracket-tile/bracket-tile.component';
import { BracketComponent } from './components/bracket/bracket.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BracketTileComponent,
    BracketComponent,
    TournamentComponent
  ],
  imports: [
    CommonModule,
    BracketsRoutingModule,
    SharedModule
  ]
})
export class BracketsModule { }
