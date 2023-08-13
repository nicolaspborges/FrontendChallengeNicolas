import { Component, EventEmitter, Input } from '@angular/core';
import { TeamsService } from 'src/app/dashboard/services/teams.service';
import { SelectedTeam } from 'src/app/models/selected-team';
import { Team } from 'src/app/models/team';

@Component({
    selector: 'app-bracket',
    templateUrl: './bracket.component.html',
    styleUrls: ['./bracket.component.sass'],
})
export class BracketComponent {
    constructor(private teamsService: TeamsService) {}

    electedTeams!: Team[];

    chosen: any = [true, true, true, true, true, true, true, true]

    eighthFinalists!: Team[];

    semiFinalists: any = { //names must be in alphabetical order
        "semiAFirst": '',
        "semiASecond": '',
        "semiBFirst": '',
        "semiBSecond": '',
    };

    finalists: any = {
        "finalistA": '',
        "finalistB": ''
    } ;

    champion: Team = {}  as Team;

    @Input() teamSelected: EventEmitter<object> = new EventEmitter<object>();

    ngOnInit() {
        console.log(this.champion)
        this.teamsService.getTeams().subscribe({
            next: (response) => {
                this.electedTeams = response;
            },
            error: (error) => {
                console.error(
                    error,
                    'Error at getting teams on bracket component'
                );
            },
        });
    }

    onSemiFinalistSelect(selectedTeam: SelectedTeam) {
        const { index, team } = selectedTeam;

        switch (index) {
            case 0:
            case 1:
                this.semiFinalists['semiAFirst'] = team;
                break;
            case 2:
            case 3:
                this.semiFinalists['semiASecond'] = team;
                break;
            case 4:
            case 5:
                this.semiFinalists['semiBFirst'] = team;
                break;
            case 6:
            case 7:
                this.semiFinalists['semiBSecond'] = team;
                break;
        }
        console.log(this.semiFinalists);
    }

    onFinalistSelect(selectedTeam: SelectedTeam) {
       const { index, team } = selectedTeam;

       if(index < 2) {
        this.finalists['finalistA'] = team;
       } else if (index>=2 && index < 8) {
        this.finalists['finalistB'] = team;
       }
    }

    onChampionsSelect(selectedTeam: SelectedTeam) {
        this.champion = selectedTeam.team;
    }

    quarterPositions!: any;

    lengthTwo = [1, 2, 3, 4, 5, 6, 7, 8];

    lengthTre = [1, 2, 3, 4];

    lengthFour = [1, 2];

    lengthFive = [1];
}
