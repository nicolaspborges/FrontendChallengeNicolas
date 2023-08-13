import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { Team } from 'src/app/models/team';

@Component({
    selector: 'app-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.sass'],
})
export class TeamsListComponent {
    constructor(private teamsService: TeamsService) {}

    @Input() teams!: Team[];
    @Output() teamDeletion: EventEmitter<Team> = new EventEmitter<Team>()

    onDeleteTeam(team: Team) {
        this.teamDeletion.emit(team)
    }
}
