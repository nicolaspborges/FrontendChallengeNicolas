import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedTeam } from 'src/app/models/selected-team';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-bracket-tile',
  templateUrl: './bracket-tile.component.html',
  styleUrls: ['./bracket-tile.component.sass']
})
export class BracketTileComponent {

    @Input() team!: any;
    @Input() index!: number;
    @Input() dinamicClass!: string;

    @Output() selectedTeam: EventEmitter<SelectedTeam> = new EventEmitter<SelectedTeam>();
   
}
