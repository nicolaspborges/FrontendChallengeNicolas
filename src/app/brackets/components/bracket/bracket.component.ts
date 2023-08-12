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

    eighthFinalists!: Team[];

    quarterFinalists: any = { //names must be in alphabetical order
        "quarterAFirst": '',
        "quarterASecond": '',
        "quarterBFirst": '',
        "quarterBSecond": '',
    };

    semiFinalists: any = {
        "finalistA": '',
        "finalistB": ''
    } ;

    @Input() teamSelected: EventEmitter<object> = new EventEmitter<object>();

    ngOnInit() {
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

    onQuarterFinalistSelect(selectedTeam: SelectedTeam) {
        const { index, team } = selectedTeam;

        switch (index) {
            case 0:
            case 1:
                this.quarterFinalists['quarterAFirst'] = team;
                break;
            case 2:
            case 3:
                this.quarterFinalists['quarterASecond'] = team;
                break;
            case 4:
            case 5:
                this.quarterFinalists['quarterBFirst'] = team;
                break;
            case 6:
            case 7:
                this.quarterFinalists['quarterBSecond'] = team;
                break;
        }
        console.log(this.quarterFinalists);
    }

    onFinalistSelect(selectedTeam: SelectedTeam) {
       const { index, team } = selectedTeam;

       if(index < 2) {
        this.semiFinalists['finalistA'] = team;
       } else if (index>=2 && index < 8) {
        this.semiFinalists['finalistB'] = team;
       }
    }

    quarterPositions!: any;

    lengthTwo = [1, 2, 3, 4, 5, 6, 7, 8];

    lengthTre = [1, 2, 3, 4];

    lengthFour = [1, 2];

    lengthFive = [1];
}
