import { Component, Input } from '@angular/core';
import { TeamsService } from '../../services/teams.service';

@Component({
    selector: 'app-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.sass'],
})
export class TeamsListComponent {
    constructor(private teamsService: TeamsService) {}

    @Input() teams: any = [];

    
}
