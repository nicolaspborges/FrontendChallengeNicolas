import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BracketTileComponent } from './components/bracket-tile/bracket-tile.component';
import { BracketComponent } from './components/bracket/bracket.component';
import { TournamentComponent } from './pages/tournament/tournament.component';

const routes: Routes = [
    {
        path: '', component: TournamentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BracketsRoutingModule { }
